import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const formFieldContainerStencil = defineStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
  },
});
