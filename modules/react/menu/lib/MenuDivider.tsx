import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface DividerProps extends CSProps {}

export const menuDividerStencil = createStencil({
  base: {
    display: 'block',
    height: px2rem(1),
    border: system.space.zero,
    borderTop: `${px2rem(1)} solid ${system.color.border.divider}`,
    margin: `${system.space.x2} ${system.space.zero}`,
  },
});

const displayName = 'Menu.Divider';

export const MenuDivider = createComponent('hr')({
  displayName,
  Component({...elemProps}: DividerProps, ref, Element) {
    const resolved = useResolvedStencil(displayName, menuDividerStencil, undefined);
    return <Element ref={ref} {...handleCsProp(elemProps, resolved)} />;
  },
});
