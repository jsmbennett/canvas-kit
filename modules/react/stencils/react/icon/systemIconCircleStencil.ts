import {base, system} from '@workday/canvas-tokens-web';
import {calc, cssVar} from '@workday/canvas-kit-styling';
import {systemIconStencil} from './systemIconStencil';

export const systemIconCircleStencil = {
  vars: {
    containerSize: '',
    background: '',
    color: '',
  },
  base: ({background, containerSize, color}) => ({
    background: cssVar(background, base.soap200),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: system.space.zero,
    border: 'none',
    borderRadius: system.shape.round,
    overflow: 'hidden',
    width: cssVar(containerSize, system.space.x10),
    height: cssVar(containerSize, system.space.x10),
    [systemIconStencil.vars.size]: calc.multiply(cssVar(containerSize, system.space.x10), 0.625),
    [systemIconStencil.vars.color]: color,
    '& img': {
      width: '100%',
      height: '100%',
    },
  }),
};
