import {base} from '@workday/canvas-tokens-web';
import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {svgStencil} from './svgStencil';

export const accentIconStencil = {
  extends: svgStencil,
  vars: {
    color: '',
  },
  base: ({color, size}) => ({
    [size]: px2rem(56),
    '& .color-500': {
      fill: cssVar(color, base.blueberry500),
    },
    '& .french-vanilla-100': {
      fill: base.frenchVanilla100,
    },
  }),
  modifiers: {
    transparent: {
      true: {
        '& .french-vanilla-100': {
          fill: 'transparent',
        },
      },
    },
  },
};
