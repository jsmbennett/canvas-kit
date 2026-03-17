
import {system} from '@workday/canvas-tokens-web';

export const tabsOverflowButtonStencil = {
  base: {
    '&:has([data-part="tabs-overflow-button-icon"])': {
      display: 'flex',
      gap: system.space.zero,
    },
  },
};
