import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const popupBodyStencil = defineStencil({
  base: {
    overflowY: 'auto',
    padding: system.space.x2,
  },
});
