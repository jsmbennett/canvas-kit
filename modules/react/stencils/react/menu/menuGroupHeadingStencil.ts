import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const menuGroupHeadingStencil = defineStencil({
  base: {
    ...system.type.subtext.large,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: system.space.x4,
    padding: `${system.space.x2} ${system.space.x4}`,
    boxSizing: 'border-box',
    fontWeight: system.fontWeight.bold,
  },
});
