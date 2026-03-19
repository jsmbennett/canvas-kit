import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const expandableContentStencil = defineStencil({
  base: {
    background: system.color.bg.transparent,
    padding: `${system.space.x4} ${system.space.x2} ${system.space.x2}`,
  },
});
