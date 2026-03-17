import {calc, px2rem} from '@workday/canvas-kit-styling';
import {hyperlinkStencil} from './hyperlinkStencil';
import {systemIconStencil} from '../icon/systemIconStencil';
import {system} from '@workday/canvas-tokens-web';

export const externalHyperlinkStencil = {
  extends: hyperlinkStencil,
  base: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& [data-part="external-hyperlink-icon"]': {
      [systemIconStencil.vars.color]: 'currentColor',
      [systemIconStencil.vars.size]: '1em',
      width: calc.subtract('1em', px2rem(1)),
      minWidth: calc.subtract(system.space.x4, px2rem(1)),
      marginInlineStart: calc.subtract(system.space.x1, px2rem(2)),
      '& > svg': {
        minWidth: system.space.x4,
        minHeight: system.space.x4,
      },
      ':dir(rtl)': {
        transform: 'rotate(270deg)',
      },
    },
  },
};
