import {calc, px2rem} from '@workday/canvas-kit-styling';
import {systemIconStencil} from '../../react/icon/systemIconStencil';
import {system} from '@workday/canvas-tokens-web';

export const pillIconStencil = {
  extends: systemIconStencil,
  base: {
    marginInlineStart: calc.negate(system.space.x1),
    [systemIconStencil.vars.size]: px2rem(20),
    flex: '0 0 auto',
  },
};
