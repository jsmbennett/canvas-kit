import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const modalHeadingStencil = defineStencil({
  base: {
    '@media screen and (max-width: 768px)': {
      marginBlockEnd: system.space.zero,
      padding: `${system.space.x2} ${system.space.x2} ${system.space.x1}`,
    },
  },
});
