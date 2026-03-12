import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';

export const baseTableBodyStencil = createStencil({
  base: {
    'tr ': {
      '&:last-of-type': {
        'td, th': {
          borderBottom: 'none',
        },
      },
      '&:first-of-type': {
        'td, th': {
          borderTop: 'none',
        },
      },
    },
    'td ': {
      '&:last-of-type': {
        borderInlineEnd: 'none',
      },
      '&:first-of-type': {
        borderInlineStart: 'none',
      },
    },
  },
});

const displayName = 'Table.Body';

export const BaseTableBody = createComponent('tbody')({
  displayName,
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, baseTableBodyStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
