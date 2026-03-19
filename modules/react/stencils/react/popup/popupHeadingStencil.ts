import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const popupHeadingStencil = defineStencil({
  base: {
    marginBlockEnd: system.space.x2,
    padding: system.space.x2,
  },
});
