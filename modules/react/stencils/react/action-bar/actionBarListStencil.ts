import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const actionBarListStencil = {
  base: {
    display: 'flex',
    boxShadow: system.depth[1],
    gap: system.space.x4,
    background: system.color.bg.default,
    borderBlockStart: `solid 1px ${cssVar(system.color.border.divider)}`,
    padding: `${cssVar(system.space.x4)} ${cssVar(system.space.x10)} `,
    position: 'fixed',
    insetBlockEnd: 0,
    insetInlineStart: 0,
    insetInlineEnd: 0,
    '@media (max-width: 767.5px)': {
      padding: system.space.x4,
      '> *': {
        flex: 1,
      },
    },
  },
};
