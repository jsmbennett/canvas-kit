import * as React from 'react';
import {createStencil} from '@workday/canvas-kit-styling';

type StencilConfigInput = Parameters<typeof createStencil>[0];

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
    () =>
      overrideEntry
        ? (createStencil(
            overrideEntry.mergeWithDefault
              ? {
                  ...overrideEntry.stencil,
                  extends: defaultStencil as never,
                }
              : overrideEntry.stencil
          ) as unknown as (args?: TArgs) => TResult)
        : undefined,
    [overrideEntry, defaultStencil]
  );

  if (overrideStencil) {
    return overrideStencil(args);
  }
  return defaultStencil(args);
}
