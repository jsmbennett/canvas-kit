import {calc, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const checkboxRippleStencil = defineStencil({
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
