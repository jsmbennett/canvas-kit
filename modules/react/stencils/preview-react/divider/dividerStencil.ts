import {calc, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const dividerStencil = {
  vars: {
    space: cssVar(system.space.x4),
  },
  base: ({space}) => {
    return {
      display: 'block',
      height: px2rem(1),
      border: 'none',
      borderTop: `1px solid ${system.color.border.divider}`,
      margin: `${calc.divide(space, 2)} 0`,
    };
  },
};
