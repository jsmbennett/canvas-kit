import {calc, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const modalCardStencil = defineStencil({
  base: {
    margin: system.space.x10,
    width: calc.add(calc.multiply(system.space.x20, 5), system.space.x10),
    borderWidth: system.space.zero,
    outline: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[6],
    '@media screen and (max-width: 768px)': {
      margin: system.space.x4, // 16px all around margin on smaller screen sizes
      padding: system.space.x4, // brings total padding between edge and content to 24px
      borderRadius: system.space.x6, // 24px border radius on smaller devices.
    },
  },
});
