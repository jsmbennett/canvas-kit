
import {system} from '@workday/canvas-tokens-web';

export const listBoxContainerStencil = {
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
};
