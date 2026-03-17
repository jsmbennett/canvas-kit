import {px2rem} from '@workday/canvas-kit-styling';
import {menuCardStencil} from '../menu/menuCardStencil';

export const selectCardStencil = {
  base: {
    [menuCardStencil.vars.maxHeight]: px2rem(300),
  },
};
