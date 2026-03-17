
import {system} from '@workday/canvas-tokens-web';

export const modalHeadingStencil = {
  base: {
    '@media screen and (max-width: 768px)': {
      marginBlockEnd: system.space.zero,
      padding: `${system.space.x2} ${system.space.x2} ${system.space.x1}`,
    },
  },
};
