import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const popupCloseIconStencil = defineStencil({
  base: {
    position: 'absolute',
    insetInlineEnd: system.space.x1,
    top: system.space.x1,
  },
});
