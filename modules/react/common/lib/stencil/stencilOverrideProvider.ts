import * as React from 'react';

import {createStencil} from '@workday/canvas-kit-styling';

export type StencilConfigInput = Parameters<typeof createStencil>[0];

export type StencilOptions = {
  /**
   * When true, the custom stencil config is layered on top of the component default stencil.
   * When false or omitted, the custom stencil replaces the default stencil.
   */
  mergeWithDefault?: boolean;
  /**
   * Stencil config input accepted by `createStencil`.
   */
  stencil: StencilConfigInput;
};

/**
 * Map of Canvas component displayNames to stencil config objects.
 * Values define a stencil config and whether to merge it with the component default stencil.
 * Keys should match the `displayName` of components created via `createComponent`.
 */
export type StencilProviderMap = Record<string, StencilOptions>;

/**
 * @internal Used by CanvasProvider and useResolvedStencil.
 */
export const StencilOverrideContext = React.createContext<StencilProviderMap | null>(null);

type ResolvedStencil<TArgs extends object | undefined, TResult> = (args?: TArgs) => TResult;

const isStencilFn = (input: unknown): input is (...args: any[]) => any => {
  return typeof input === 'function';
};

const toStencilFunction = <TArgs extends object | undefined, TResult>(
  input: unknown
): ResolvedStencil<TArgs, TResult> => {
  if (isStencilFn(input)) {
    return input as ResolvedStencil<TArgs, TResult>;
  }

  const config = (input || {}) as Record<string, unknown>;
  const compiledExtends = config.extends
    ? toStencilFunction<TArgs, TResult>(config.extends)
    : undefined;
  const compiledConfig = compiledExtends
    ? ({...config, extends: compiledExtends} as unknown as StencilConfigInput)
    : (config as unknown as StencilConfigInput);

  return createStencil(compiledConfig) as unknown as ResolvedStencil<TArgs, TResult>;
};

const resolveOverrideStencil = <TArgs extends object | undefined, TResult>(
  defaultStencil: ResolvedStencil<TArgs, TResult>,
  overrideEntry: StencilOptions
): ResolvedStencil<TArgs, TResult> => {
  if (!overrideEntry.mergeWithDefault) {
    return toStencilFunction<TArgs, TResult>(overrideEntry.stencil);
  }

  if (isStencilFn(overrideEntry.stencil)) {
    // No config object is available to merge when a compiled stencil function is provided.
    return overrideEntry.stencil as unknown as ResolvedStencil<TArgs, TResult>;
  }

  const overrideConfig = (overrideEntry.stencil || {}) as unknown as Record<string, unknown>;
  return toStencilFunction<TArgs, TResult>({
    ...overrideConfig,
    extends: defaultStencil,
  } as unknown as StencilConfigInput);
};

/**
 * Resolves the stencil to use at render time.
 * If an override config exists in context for the given componentName,
 * `createStencil` is called for this component instance; otherwise the default stencil is used.
 */
export function useResolvedStencil<TArgs extends object | undefined, TResult>(
  componentName: string,
  defaultStencil: (args?: TArgs) => TResult,
  args?: TArgs
): TResult {
  const providerMap = React.useContext(StencilOverrideContext);
  const overrideEntry = providerMap?.[componentName];
  const overrideStencil = React.useMemo(
    () => (overrideEntry ? resolveOverrideStencil(defaultStencil, overrideEntry) : undefined),
    [overrideEntry, defaultStencil]
  );

  if (overrideStencil) {
    return overrideStencil(args);
  }
  return defaultStencil(args);
}
