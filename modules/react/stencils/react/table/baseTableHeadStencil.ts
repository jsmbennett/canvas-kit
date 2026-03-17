import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableHeadStencil = {
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
};
