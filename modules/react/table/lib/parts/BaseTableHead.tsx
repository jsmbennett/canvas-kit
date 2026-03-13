import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableHeadStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.alt.softer,
    minHeight: calc.subtract(system.space.x16, system.space.x4),
    'th ': {
      '&:first-of-type': {
        borderInlineStart: 'none',
      },
      '&:last-of-type': {
        borderInlineEnd: 'none',
      },
    },
  },
});

const displayName = 'Table.Head';

export const BaseTableHead = createComponent('thead')({
  displayName,
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, baseTableHeadStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
