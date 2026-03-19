import {calc, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {systemIconStencil} from '../../../icon/lib/SystemIcon';
import {defineStencil} from '../../defineStencil';

export const checkboxCheckStencil = defineStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    span: {
      marginInlineStart: calc.negate(px2rem(6)),
      transition: 'margin 200ms ease',
    },
    opacity: system.opacity.zero,
    transform: 'scale(0.5)',
  },
  modifiers: {
    checked: {
      true: {
        [systemIconStencil.vars.color]: system.color.fg.inverse,
        opacity: system.opacity.full,
        transform: 'scale(1)',
      },
    },
    indeterminate: {
      true: {
        opacity: system.opacity.full,
        transform: 'scale(1)',
      },
    },
    variant: {
      inverse: {
        [systemIconStencil.vars.color]: brand.primary.base,
        '& > div': {
          backgroundColor: brand.primary.base,
        },
      },
    },
  },
});
