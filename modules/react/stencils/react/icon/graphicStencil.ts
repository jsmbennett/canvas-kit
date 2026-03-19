import {defineStencil} from '../../defineStencil';
import {svgStencil} from './svgStencil';

export const graphicStencil = defineStencil({
  extends: svgStencil,
  base: {},
  modifiers: {
    grow: {
      true: {
        width: '100%',
        [svgStencil.vars.width]: '100%',
      },
    },
  },
});
