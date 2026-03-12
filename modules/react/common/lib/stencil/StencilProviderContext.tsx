import * as React from 'react';
import {createStencil} from '@workday/canvas-kit-styling';

type StencilConfigInput = Parameters<typeof createStencil>[0];

/**
 * Map of Canvas component displayNames to stencil config objects.
 * Values should be the same input you would pass to `createStencil`.
 * Keys should match the `displayName` of components created via `createComponent`.
 */
export type StencilProviderMap = Record<string, StencilConfigInput>;

/**
 * @internal Used by CanvasProvider and useResolvedStencil.
 */
export const StencilOverrideContext = React.createContext<StencilProviderMap | null>(null);

/**
 * Creates a stencil provider context value (provider map) to pass to CanvasProvider.
 * This is an identity helper used to make intent explicit at call sites.
 * CanvasProvider will pass this map through context, and each component instance
 * will call `createStencil` from `useResolvedStencil` when it resolves an override.
 *
 * @example
 * ```tsx
 * const stencilOverrides = createStencilProviderContext({
 *   Text: {
 *     base: {color: 'rebeccapurple'},
 *   },
 *   PrimaryButton: {
 *     base: {fontWeight: 700},
 *   },
 * });
 *
 * <CanvasProvider stencilProviderContext={stencilOverrides}>
 *   <App />
 * </CanvasProvider>
 * ```
 */
export function createStencilProviderContext(providerMap: StencilProviderMap): StencilProviderMap {
  return providerMap;
}

/**
 * Resolves the stencil to use at render time.
 * If an override exists in the stencil provider context for the given componentName,
 * the override is called; otherwise the default stencil is used.
 *
 * @param componentName - The component's displayName (e.g. "Text", "PrimaryButton")
 * @param defaultStencil - The default stencil function to use when no override is provided
 * @param args - Arguments to pass to the stencil (modifiers, etc.)
 * @returns The stencil result (className, style, etc.) for spreading onto elements
 */
export function useResolvedStencil<TArgs extends object | undefined, TResult>(
  componentName: string,
  defaultStencil: (args?: TArgs) => TResult,
  args?: TArgs
): TResult {
  const providerMap = React.useContext(StencilOverrideContext);
  const overrideConfig = providerMap?.[componentName];
  const overrideStencil = React.useMemo(
    () =>
      overrideConfig
        ? (createStencil(overrideConfig) as unknown as (args?: TArgs) => TResult)
        : undefined,
    [overrideConfig]
  );

  if (overrideStencil) {
    return overrideStencil(args);
  }
  return defaultStencil(args);
}
