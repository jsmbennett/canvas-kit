import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const comboboxCardStencil = defineStencil({
  base: {
    '& :where([data-part="list-box-container"])': {
      borderRadius: system.shape.x2,
    },
  },
});
