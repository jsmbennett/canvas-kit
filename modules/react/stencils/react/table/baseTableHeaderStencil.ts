import {calc, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const baseTableHeaderStencil = defineStencil({
  base: {
    backgroundColor: system.color.bg.default,
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    justifyContent: 'start',
    minHeight: calc.subtract(system.space.x16, system.space.x2),
    padding: `${system.space.x2} ${system.space.x4}`,
    wordBreak: 'break-word',
    fontWeight: system.fontWeight.medium,
  },
});
