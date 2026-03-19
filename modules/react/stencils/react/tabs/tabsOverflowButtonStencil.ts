import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const tabsOverflowButtonStencil = defineStencil({
  base: {
    '&:has([data-part="tabs-overflow-button-icon"])': {
      display: 'flex',
      gap: system.space.zero,
    },
  },
});
