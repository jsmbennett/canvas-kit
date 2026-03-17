import {avatarStencil} from '../avatar/avatarStencil';

import {system} from '@workday/canvas-tokens-web';

export const expandableAvatarStencil = {
  extends: avatarStencil,
  base: {
    marginInlineEnd: system.space.x2,
    flexShrink: 0,
  },
};
