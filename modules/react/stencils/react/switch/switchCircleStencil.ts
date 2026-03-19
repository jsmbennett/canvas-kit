import {calc} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const switchCircleStencil = defineStencil({
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
});
