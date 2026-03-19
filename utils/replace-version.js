import globPkg from 'glob';
import {execSync} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {promisify} from 'node:util';

const glob = promisify(globPkg.glob);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const lernaConfig = JSON.parse(await fs.readFile(path.join(__dirname, '../lerna.json'), 'utf8'));

const isAlphaOrNext = value => value.includes('-alpha.') || value.includes('-next.');
const isModernMajor = value => Number(value.split('.')[0]) >= 15;

function getPrereleaseNextVersion() {
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

const version =
  process.env.CANVAS_KIT_VERSION ??
  process.env.npm_package_version ??
  getPrereleaseNextVersion() ??
  (isAlphaOrNext(lernaConfig.version) || isModernMajor(lernaConfig.version)
    ? lernaConfig.version
    : process.env.npm_package_version ?? lernaConfig.version);

async function main() {
  const files = await glob(path.join(__dirname, '../modules/**/dist/**/version.js'));
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    await fs.writeFile(file, content.replace('%VERSION%', version), 'utf8');
  }
}

main();
