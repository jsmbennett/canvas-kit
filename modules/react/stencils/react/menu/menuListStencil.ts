
import {system} from '@workday/canvas-tokens-web';

export const menuListStencil = {
  base: {
    background: system.color.bg.default,
    borderRadius: system.shape.zero,
    padding: system.space.zero,
    gap: system.space.zero,
  },
  modifiers: {
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
};
