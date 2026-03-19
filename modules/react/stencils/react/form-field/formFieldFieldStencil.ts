import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const formFieldFieldStencil = defineStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
  },
});
