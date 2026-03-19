import {calc, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const dividerStencil = defineStencil({
  vars: {
    space: cssVar(system.space.x4),
  },
  base: ({space}: any) => {
    return {
      display: 'block',
      height: px2rem(1),
      border: 'none',
      borderTop: `1px solid ${system.color.border.divider}`,
      margin: `${calc.divide(space, 2)} 0`,
    };
  },
});
