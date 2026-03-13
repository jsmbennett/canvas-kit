import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableCellStencil = createStencil({
  base: {
    alignItems: 'center',
    backgroundColor: system.color.bg.default,
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    gridTemplateColumns: '1fr',
    justifyContent: 'start',
    minHeight: '3.5rem',
    padding: `${system.space.x2} ${system.space.x4}`,
    wordBreak: 'break-word',
  },
});

const displayName = 'Table.Cell';

export const BaseTableCell = createComponent('td')({
  displayName,
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, baseTableCellStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
