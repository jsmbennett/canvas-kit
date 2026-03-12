import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableHeaderStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.default,
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    justifyContent: 'start',
    minHeight: calc.subtract(system.space.x16, system.space.x2),
    padding: `${system.space.x2} ${system.space.x4}`,
    wordBreak: 'break-word',
    fontWeight: system.fontWeight.medium,
  },
});

const displayName = 'Table.Header';

export const BaseTableHeader = createComponent('th')({
  displayName,
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, baseTableHeaderStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
