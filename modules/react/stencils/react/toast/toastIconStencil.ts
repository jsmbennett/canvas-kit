import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const toastIconStencil = defineStencil({
  base: {
    alignSelf: 'start',
    margin: `${system.space.x4} ${system.space.x3}`,
  },
});
