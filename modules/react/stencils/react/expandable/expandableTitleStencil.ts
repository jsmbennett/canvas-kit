import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const expandableTitleStencil = defineStencil({
  base: {
    ...system.type.body.medium,
    fontWeight: system.fontWeight.bold,
    color: system.color.text.strong,
    padding: `${px2rem(2)} ${system.space.zero}`,
    textAlign: 'left',
  },
});
