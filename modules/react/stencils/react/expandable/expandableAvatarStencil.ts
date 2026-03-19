import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {avatarStencil} from '../avatar/avatarStencil';

export const expandableAvatarStencil = defineStencil({
  extends: avatarStencil,
  base: {
    marginInlineEnd: system.space.x2,
    flexShrink: 0,
  },
});
