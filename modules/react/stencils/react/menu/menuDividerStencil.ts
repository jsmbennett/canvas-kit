import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const menuDividerStencil = defineStencil({
  base: {
    display: 'block',
    height: px2rem(1),
    border: system.space.zero,
    borderTop: `${px2rem(1)} solid ${system.color.border.divider}`,
    margin: `${system.space.x2} ${system.space.zero}`,
  },
});
