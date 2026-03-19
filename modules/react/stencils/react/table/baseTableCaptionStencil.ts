import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const baseTableCaptionStencil = defineStencil({
  base: {
    padding: `${system.space.x2} ${system.space.x4}`,
  },
});
