import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const toastBodyStencil = defineStencil({
  base: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: system.space.x4,
    paddingBottom: system.space.x4,
    flexGrow: 1,
    gap: system.space.x1,
  },
});
