import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';

import {useExpandableContent} from './hooks/useExpandableContent';
import {useExpandableModel} from './hooks/useExpandableModel';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ExpandableContentProps extends ExtractProps<typeof Box, never> {
  /**
   * The children of the `Expandable.Content` whose visibility is controlled by the associated
   * `Expandable.Target`
   */
  children?: React.ReactNode;
}

export const expandableContentStencil = createStencil({
  base: {
    background: system.color.bg.transparent.default,
    padding: `${system.space.x4} ${system.space.x2} ${system.space.x2}`,
  },
});

const displayName = 'Expandable.Content';

export const ExpandableContent = createSubcomponent('div')({
  displayName,
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableContent,
})<ExpandableContentProps>(({children, ...elementProps}, Element) => {
  const resolved = useResolvedStencil(displayName, expandableContentStencil, undefined);
  return <Element {...mergeStyles(elementProps, resolved)}>{children}</Element>;
});
