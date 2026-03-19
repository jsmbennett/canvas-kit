import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const switchBackgroundStencil = defineStencil({
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    marginTop: system.space.x1,
    width: system.space.x8,
    height: system.space.x4,
    borderRadius: system.shape.round,
    padding: `${system.space.zero} ${px2rem(2)}`,
    transition: 'background-color 200ms ease',
    backgroundColor: system.color.bg.muted.soft,
  },
});
