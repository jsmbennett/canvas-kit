import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const radioLabelStencil = defineStencil({
  base: {
    alignItems: 'flex-start',
    minHeight: system.space.x6,
    position: 'relative',
    gap: system.space.x3,
  },
});
