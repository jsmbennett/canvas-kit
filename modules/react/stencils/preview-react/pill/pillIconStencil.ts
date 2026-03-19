import {calc, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {systemIconStencil} from '../../react/icon/systemIconStencil';

export const pillIconStencil = defineStencil({
  extends: systemIconStencil,
  base: {
    marginInlineStart: calc.negate(system.space.x1),
    [systemIconStencil.vars.size]: px2rem(20),
    flex: '0 0 auto',
  },
});
