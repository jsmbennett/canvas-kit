import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableCellStencil = {
  base: {
    alignItems: 'center',
    backgroundColor: system.color.bg.default,
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    gridTemplateColumns: '1fr',
    justifyContent: 'start',
    minHeight: '3.5rem',
    padding: `${system.space.x2} ${system.space.x4}`,
    wordBreak: 'break-word',
  },
};
