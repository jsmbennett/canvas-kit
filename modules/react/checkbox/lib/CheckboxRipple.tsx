import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {calc, CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const checkboxRippleStencil = createStencil({
  base: {
    borderRadius: system.shape.round,
    boxShadow: 'none',
    height: calc.add(system.space.x4, px2rem(2)),
    width: calc.add(system.space.x4, px2rem(2)),
    transition: 'box-shadow 150ms ease-out',
    position: 'absolute',
    pointerEvents: 'none',
  },
});

const displayName = 'CheckboxRipple';

export const CheckboxRipple = createComponent('span')({
  displayName,
  Component: (elemProps: CSProps) => {
    const resolved = useResolvedStencil(displayName, checkboxRippleStencil, undefined);
    return <span {...handleCsProp(elemProps, resolved)} />;
  },
});
