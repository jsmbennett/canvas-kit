import {cssVar} from '@workday/canvas-kit-styling';

import {defineStencil} from '../../defineStencil';

export const svgStencil = defineStencil({
  vars: {
    /** sets width of svg element */
    width: '',
    /** sets height of svg element */
    height: '',
    /** sets width and height of svg element */
    size: '',
  },
  base: ({width, height, size}: any) => ({
    display: 'inline-block',
    '> svg': {
      display: 'block',
      width: cssVar(width, size),
      height: cssVar(height, size),
    },
  }),
  modifiers: {
    shouldMirror: {
      true: {
        transform: 'scaleX(-1)',
      },
    },
  },
});
