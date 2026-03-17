import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const toastStencil = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    width: calc.add(calc.multiply(system.space.x20, 4), system.space.x10),
    padding: system.space.zero,
    gap: system.space.x1,
  },
};
