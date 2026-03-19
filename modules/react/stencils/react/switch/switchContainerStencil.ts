import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const switchContainerStencil = defineStencil({
  base: {
    position: 'relative',
    height: system.space.x6,
    width: system.space.x8,
  },
});
