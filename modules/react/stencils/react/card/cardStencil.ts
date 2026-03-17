import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const cardStencil = {
  base: {
    boxShadow: system.depth[1],
    padding: system.space.x8,
    backgroundColor: system.color.bg.default,
    border: `${px2rem(1)} solid ${system.color.border.container}`,
    borderRadius: system.shape.x2,
  },
};
