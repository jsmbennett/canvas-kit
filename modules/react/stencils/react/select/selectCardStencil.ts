import {px2rem} from '@workday/canvas-kit-styling';

import {defineStencil} from '../../defineStencil';
import {menuCardStencil} from '../menu/menuCardStencil';

export const selectCardStencil = defineStencil({
  base: {
    [menuCardStencil.vars.maxHeight]: px2rem(300),
  },
});
