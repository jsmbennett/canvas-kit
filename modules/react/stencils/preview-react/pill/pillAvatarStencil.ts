import {defineStencil} from '../../defineStencil';
import {avatarStencil} from '../../react/avatar/avatarStencil';

export const pillAvatarStencil = defineStencil({
  extends: avatarStencil,
  base: {
    cursor: 'pointer',
    flex: '0 0 auto',
  },
});
