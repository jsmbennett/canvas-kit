import {base} from '@workday/canvas-tokens-web';
import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {svgStencil} from './svgStencil';

export const appletIconStencil = {
  extends: svgStencil,
  vars: {
    color200: '',
    color300: '',
    color400: '',
    color500: '',
  },
  base: ({color200, color300, color400, color500, size}) => ({
    [size]: px2rem(92),
    '& .color-100': {
      fill: base.frenchVanilla100,
    },
    '& .color-200': {
      fill: cssVar(color200, base.blueberry200),
    },
    '& .color-300': {
      fill: cssVar(color300, base.blueberry300),
    },
    '& .color-400': {
      fill: cssVar(color400, base.blueberry400),
    },
    '& .color-400-alpha-20': {
      fill: cssVar(color400, base.blueberry400),
    },
    '& .color-500': {
      fill: cssVar(color500, base.blueberry400),
    },
  }),
};
