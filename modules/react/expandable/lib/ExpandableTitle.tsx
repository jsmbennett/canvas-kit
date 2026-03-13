import React from 'react';

import {ExtractProps, createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ExpandableTitleProps extends ExtractProps<typeof Box, never> {
  /**
   * Children of the `Expandable.Title`. This should contain a string for the title
   */
  children: React.ReactNode;
}

export const expandableTitleStencil = createStencil({
  base: {
    ...system.type.body.medium,
    fontWeight: system.fontWeight.bold,
    color: system.color.text.strong,
    padding: `${px2rem(2)} ${system.space.zero}`,
    textAlign: 'left',
  },
});

const displayName = 'Expandable.Title';

export const ExpandableTitle = createComponent('div')({
  displayName,
  Component: ({children, ...elemProps}: ExpandableTitleProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, expandableTitleStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
