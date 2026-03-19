import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const toastMessageStencil = defineStencil({
  base: {
    wordBreak: 'break-word',
    marginBlockStart: system.space.zero,
    marginBlockEnd: system.space.zero,
  },
});
