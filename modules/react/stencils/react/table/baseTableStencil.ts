import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const baseTableStencil = defineStencil({
  base: {
    ...system.type.subtext.large,
    border: `${px2rem(1)} solid ${system.color.border.container}`,
    borderRadius: system.shape.x2,
    overflow: 'auto',
    color: system.color.text.default,
  },
});
