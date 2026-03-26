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
    [systemIconStencil.vars.color]: 'currentColor',
  },
  modifiers: {
    variant: {
      neutral: {
        color: system.color.static.gray.strong,
        [systemIconStencil.vars.color]: system.color.static.gray.strong,
        background: system.color.static.gray.soft,
      },
      caution: {
        color: system.color.static.gold.stronger,
        [systemIconStencil.vars.color]: system.color.static.gold.stronger,
        background: system.color.static.orange.soft,
      },
      info: {
        color: system.color.static.blue.strong,
        [systemIconStencil.vars.color]: system.color.static.blue.strong,
        background: system.color.static.blue.soft,
      },
      positive: {
        color: system.color.static.green.strong,
        [systemIconStencil.vars.color]: system.color.static.green.strong,
        background: system.color.static.green.soft,
      },
      critical: {
        color: system.color.static.red.strong,
        [systemIconStencil.vars.color]: system.color.static.red.strong,
        background: system.color.static.red.soft,
      },
      transparent: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.translucent,
      },
      ai: {
        color: system.color.static.blue.strong,
        [systemIconStencil.vars.color]: system.color.static.blue.strong,
        background: system.color.static.blue.soft,
      },
    },
    emphasis: {
      low: {},
      high: {},
    },
  },
  compound: [
    {
      modifiers: {
        variant: 'neutral',
        emphasis: 'high',
      },
      styles: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.gray.default,
      },
    },
    {
      modifiers: {
        variant: 'caution',
        emphasis: 'high',
      },
      styles: {
        color: system.color.static.gray.stronger,
        [systemIconStencil.vars.color]: system.color.static.gray.stronger,
        background: system.color.static.orange.default,
      },
    },
    {
      modifiers: {
        variant: 'info',
        emphasis: 'high',
      },
      styles: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.blue.default,
      },
    },
    {
      modifiers: {
        variant: 'positive',
        emphasis: 'high',
      },
      styles: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.green.strong,
      },
    },
    {
      modifiers: {
        variant: 'critical',
        emphasis: 'high',
      },
      styles: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.red.default,
      },
    },
    {
      modifiers: {
        variant: 'transparent',
        emphasis: 'high',
      },
      styles: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.bg.translucent,
      },
    },
    {
      modifiers: {
        variant: 'ai',
        emphasis: 'high',
      },
      styles: {
        color: system.color.static.white,
        [systemIconStencil.vars.color]: system.color.static.white,
        background: system.color.static.blue.default,
      },
    },
  ],
  defaultModifiers: {
    variant: 'neutral',
    emphasis: 'low',
  },
});
