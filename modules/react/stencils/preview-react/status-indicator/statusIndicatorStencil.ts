import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {systemIconStencil} from '../../react/icon/systemIconStencil';

export const statusIndicatorStencil = defineStencil({
  base: {
    display: 'inline-flex',
    gap: system.space.x1,
    maxWidth: px2rem(200),
    alignItems: 'center',
    borderRadius: system.shape.half,
    height: px2rem(20),
    padding: `${system.space.zero} ${system.space.x1}`,
    outline: `${px2rem(1)} solid transparent`,
  },
  modifiers: {
    gray: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.gray.default,
      },
      low: {
        color: system.color.static.gray.strong,
        [systemIconStencil.vars.color]: system.color.static.gray.strong,
        background: system.color.static.gray.soft,
      },
    },
    orange: {
      high: {
        color: system.color.static.gray.stronger,
        [systemIconStencil.vars.color]: system.color.static.gray.stronger,
        background: system.color.static.orange.default,
      },
      low: {
        color: system.color.static.gold.stronger,
        [systemIconStencil.vars.color]: system.color.static.gold.stronger,
        background: system.color.static.orange.soft,
      },
    },
    blue: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.blue.default,
      },
      low: {
        color: system.color.static.blue.strong,
        [systemIconStencil.vars.color]: system.color.static.blue.strong,
        background: system.color.static.blue.soft,
      },
    },
    green: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.green.strong,
      },
      low: {
        color: system.color.static.green.strong,
        [systemIconStencil.vars.color]: system.color.static.green.strong,
        background: system.color.static.green.soft,
      },
    },
    red: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.red.default,
      },
      low: {
        color: system.color.static.red.strong,
        [systemIconStencil.vars.color]: system.color.static.red.strong,
        background: system.color.static.red.soft,
      },
    },
    transparent: {
      high: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.translucent,
      },
      low: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.translucent,
      },
    },
  },
});
