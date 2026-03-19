import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const listBoxContainerStencil = defineStencil({
  base: {
    '& :where([data-part="list"])': {
      display: 'flex',
      flexDirection: 'column',
      marginBlockStart: system.space.zero,
      marginBlockEnd: system.space.zero,
    },
  },
  modifiers: {
    orientation: {
      vertical: {
        overflowY: 'auto',
      },
      horizontal: {
        overflowY: undefined,
        '& :where([data-part="list"])': {
          flexDirection: 'row',
        },
      },
    },
  },
});
