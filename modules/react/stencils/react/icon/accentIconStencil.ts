import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {svgStencil} from './svgStencil';

export const accentIconStencil = defineStencil({
  extends: svgStencil,
  vars: {
    color: '',
  },
  base: ({color, size}: any) => ({
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
});
