import * as React from 'react';

/**
 * A stencil override function accepts the same arguments as the default stencil
 * and returns the same shape (className, style, etc.) for spreading onto elements.
 */
export type StencilOverrideFn = (args?: Record<string, unknown>) => {
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
};

/**
 * Map of Canvas component displayNames to override stencil functions.
 * Keys should match the `displayName` of components created via `createComponent`.
 */
export type StencilProviderMap = Record<string, StencilOverrideFn>;

/**
 * @internal Used by CanvasProvider and useResolvedStencil.
 */
export const StencilOverrideContext = React.createContext<StencilProviderMap | null>(null);

/**
 * Creates a stencil provider context value (provider map) to pass to CanvasProvider.
 * CanvasProvider will wrap children with the stencil context when this value is provided.
 *
 * @example
 * ```tsx
 * const stencilOverrides = createStencilProviderContext({
 *   Text: (args) => myCustomTextStencil(args),
 *   PrimaryButton: (args) => myCustomButtonStencil(args),
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
export function useResolvedStencil<TArgs extends Record<string, unknown> | undefined, TResult>(
  componentName: string,
  defaultStencil: (args?: TArgs) => TResult,
  args?: TArgs
): TResult {
  const providerMap = React.useContext(StencilOverrideContext);
  const override = providerMap?.[componentName];

  if (override) {
    return override(args) as TResult;
  }
  return defaultStencil(args);
}
