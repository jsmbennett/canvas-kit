import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const expandableContainerStencil = defineStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: system.space.x2,
  },
});
