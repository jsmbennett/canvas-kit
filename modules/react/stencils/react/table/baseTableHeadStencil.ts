import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const baseTableHeadStencil = defineStencil({
  base: {
    backgroundColor: system.color.bg.alt.softer,
    minHeight: calc.subtract(system.space.x16, system.space.x4),
    'th ': {
      '&:first-of-type': {
        borderInlineStart: 'none',
      },
      '&:last-of-type': {
        borderInlineEnd: 'none',
      },
    },
  },
});
