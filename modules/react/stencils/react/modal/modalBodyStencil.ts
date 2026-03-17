
import {system} from '@workday/canvas-tokens-web';

export const modalBodyStencil = {
  base: {
    '@media screen and (max-width: 768px)': {
      marginBlockEnd: system.space.zero,
      padding: `${system.space.x1} ${system.space.x2} ${system.space.x2}`,
    },
  },
};
