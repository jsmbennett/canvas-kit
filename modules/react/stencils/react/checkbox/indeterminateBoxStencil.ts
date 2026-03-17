import {brand, system} from '@workday/canvas-tokens-web';
import {calc, px2rem} from '@workday/canvas-kit-styling';

export const indeterminateBoxStencil = {
  base: {
    width: px2rem(10),
    height: calc.divide(system.space.x1, 2),
    backgroundColor: brand.primary.accent,
  },
};
