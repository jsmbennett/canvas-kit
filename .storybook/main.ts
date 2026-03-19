import mdx from '@mdx-js/rollup';
import type {StorybookConfig} from '@storybook/react-vite';
import {execSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import remarkGfm from 'remark-gfm';
import ts from 'typescript';

// Drop the `/index.ts` if using the published package
import {styleTransformer} from '@workday/canvas-kit-styling-transform';
import type {ExportedSymbol, Value} from '@workday/canvas-kit-docs/docgen/docTypes';

import {version as reactPackageVersion} from '../modules/react/package.json' with {type: 'json'};
import {version as lernaVersion} from '../lerna.json' with {type: 'json'};
import stylingConfig from '../styling.config';
import { vitePluginInlineSpecifications } from './vite-plugin-inline-specifications';
import { vitePluginRedirectMDXToGithub } from './vite-plugin-redirect-mdx-to-github';
import { vitePluginWholeSource } from './vite-plugin-whole-source';
import { vitePluginTypescriptWithTransformers } from '@workday/canvas-kit-styling-transform';
import { getDocParser } from '@workday/canvas-kit-docs/docgen/createDocProgram';

function getPrereleaseNextVersion(): string | undefined {
  try {
    const output = execSync('npm view @workday/canvas-kit-react@prerelease-next version', {
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
    }).trim();
    return output || undefined;
  } catch {
    return undefined;
  }
}

const npmPrereleaseVersion = getPrereleaseNextVersion();
const isAlphaOrNext = (value: string) => value.includes('-alpha.') || value.includes('-next.');
const isModernMajor = (value: string) => Number(value.split('.')[0]) >= 15;

const version =
  process.env.CANVAS_KIT_VERSION ??
  npmPrereleaseVersion ??
  (isAlphaOrNext(lernaVersion) || isModernMajor(lernaVersion)
    ? lernaVersion
    : reactPackageVersion);

// const modulesPath = path.resolve(__dirname, '../modules');
const processDocs = process.env.SKIP_DOCGEN !== 'true';

const docsMap = new Map<string, ExportedSymbol<Value>[]>();

const promotedPreviewPackageImportRegex = /^@workday\/canvas-kit-preview-react\/(.+)$/;
const labsPackageImportRegex = /^@workday\/canvas-kit-labs-react\/(.+)$/;

function hasReactSubpath(subpath: string): boolean {
  const reactModuleRoot = path.resolve(process.cwd(), 'modules', 'react');
  const candidateDir = path.join(reactModuleRoot, subpath);
  if (fs.existsSync(candidateDir)) {
    return true;
  }

  const candidateTs = path.join(reactModuleRoot, `${subpath}.ts`);
  const candidateTsx = path.join(reactModuleRoot, `${subpath}.tsx`);
  const candidateJs = path.join(reactModuleRoot, `${subpath}.js`);

  return fs.existsSync(candidateTs) || fs.existsSync(candidateTsx) || fs.existsSync(candidateJs);
}

function getLabsSubpathEntry(subpath: string): string | null {
  const labsEntry = path.resolve(process.cwd(), 'modules', 'labs-react', subpath, 'index.ts');
  return fs.existsSync(labsEntry) ? labsEntry : null;
}

function vitePluginResolvePromotedPreviewImports() {
  return {
    name: 'vite-plugin-resolve-promoted-preview-imports',
    enforce: 'pre' as const,
    async resolveId(this: any, source: string, importer?: string): Promise<any> {
      const previewMatch = source.match(promotedPreviewPackageImportRegex);
      if (previewMatch) {
        const previewResolved = await this.resolve(source, importer, {
          skipSelf: true,
        });
        if (previewResolved) {
          return previewResolved;
        }

        const subpath = previewMatch[1];
        if (hasReactSubpath(subpath)) {
          return this.resolve(`@workday/canvas-kit-react/${subpath}`, importer, {
            skipSelf: true,
          });
        }
      }

      const labsMatch = source.match(labsPackageImportRegex);
      if (labsMatch) {
        const subpath = labsMatch[1];
        const labsEntry = getLabsSubpathEntry(subpath);
        if (labsEntry) {
          return labsEntry;
        }

        if (hasReactSubpath(subpath)) {
          return this.resolve(`@workday/canvas-kit-react/${subpath}`, importer, {
            skipSelf: true,
          });
        }
      }

      return null;
    },
  };
}

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  stories: [
    '../modules/docs/mdx/**/*.mdx',
    '../modules/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disabled because actions is SLOW
      },
    },
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  typescript: {
    check: false,
    reactDocgen: false, // we'll handle this ourselves
  },
  viteFinal(config) {
    const aliases = {
      '@workday/canvas-kit-styling': path.resolve(
        process.cwd(),
        'modules/styling/index.ts'
      ),
      '@workday/canvas-kit-popup-stack': path.resolve(
        process.cwd(),
        'modules/popup-stack/index.ts'
      ),
      '@workday/canvas-kit-docs': path.resolve(
        process.cwd(),
        'modules/docs/index.ts'
      ),
      '@workday/canvas-kit-labs-react/search-form': path.resolve(
        process.cwd(),
        '.storybook/shims/labsSearchForm.tsx'
      ),
      '@workday/canvas-kit-labs-react/combobox': path.resolve(
        process.cwd(),
        '.storybook/shims/labsCombobox.tsx'
      ),
    };

    const plugins = [
      vitePluginResolvePromotedPreviewImports(),
      vitePluginInlineSpecifications(),
      vitePluginRedirectMDXToGithub(),
      {
        enforce: 'pre',
        ...mdx({
          include: '*.md',
          providerImportSource: '@mdx-js/react',
          remarkPlugins: [remarkGfm],
        }),
      },
      vitePluginWholeSource(),
      vitePluginTypescriptWithTransformers({
        include: /modules\/.+\.tsx?/,
        exclude: /examples|stories|spec|codemod|docs/,
        transformers: [
          processDocs
            ? program => {
                const docParser = getDocParser(program);
                return _context => {
                  return node => {
                    if (ts.isSourceFile(node)) {
                      const fileName = node.fileName;
                      const symbols = docParser.getExportedSymbols(fileName);
                      docsMap.set(fileName, symbols);
                    }

                    return node;
                  };
                };
              }
            : undefined,
          program => styleTransformer(program, {...stylingConfig, extractCSS: false}),
        ],
        postTransform(code, id) {
          let newCode = code.replace('%VERSION%', version);
          if (docsMap.get(id) && processDocs) {
            return (
              newCode +
              `\nconst __docs = ${JSON.stringify(docsMap.get(id))}
if (window.__updateDocs) {
  window.__updateDocs?.(__docs)
} else {
  window.__docs = (window.__docs || []).concat(__docs)
}`
            );
          }
          return newCode;
        },
      }),
    ];

    const existingResolve = (config.resolve ?? {}) as Record<string, any>;
    const existingAlias =
      typeof existingResolve.alias === 'object' && !Array.isArray(existingResolve.alias)
        ? existingResolve.alias
        : {};
    const existingPlugins = (config.plugins ?? []) as any[];

    return {
      ...config,
      resolve: {
        ...existingResolve,
        alias: {
          ...existingAlias,
          ...aliases,
        },
      },
      plugins: [...plugins, ...existingPlugins],
    };
  },
};

export default config;
