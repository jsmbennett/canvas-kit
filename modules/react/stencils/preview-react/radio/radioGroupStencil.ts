import {brand, system} from '@workday/canvas-tokens-web';
import {calc, px2rem} from '@workday/canvas-kit-styling';

export const radioGroupStencil = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: system.shape.x1,
    gap: system.space.x2,
    padding: `${px2rem(10)} ${system.space.x3} ${system.space.x2}`,
    margin: `0 ${calc.negate(system.space.x3)}`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.error.base}`,
      },
      alert: {
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.alert.darkest}, inset 0 0 0 ${px2rem(3)} ${
          brand.alert.base
        }`,
      },
    },
  },
};
