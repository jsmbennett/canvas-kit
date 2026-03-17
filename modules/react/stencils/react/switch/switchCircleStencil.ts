import {brand, system} from '@workday/canvas-tokens-web';
import {calc} from '@workday/canvas-kit-styling';

export const switchCircleStencil = {
  base: {
    width: system.space.x3,
    height: system.space.x3,
    borderRadius: system.shape.round,
    boxShadow: system.depth[1],
    transition: 'transform 150ms ease',
    pointerEvents: 'none',
    backgroundColor: brand.primary.accent,
    transform: `translateX(${system.space.zero})`,
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${system.space.x4})`,
        ':dir(rtl)': {
          transform: `translateX(${calc.negate(system.space.x4)})`,
        },
      },
    },
  },
};
