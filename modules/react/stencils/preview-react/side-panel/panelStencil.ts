import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const panelStencil = {
  vars: {
    expandedWidth: '',
    collapsedWidth: '',
  },
  base: () => ({
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    outline: `${px2rem(1)} solid transparent`,
    transition: 'width ease-out 200ms, max-width ease-out 200ms',
  }),
  modifiers: {
    variant: {
      alternate: {
        backgroundColor: system.color.bg.default,
        boxShadow: system.depth[5],
      },
      standard: {
        backgroundColor: system.color.bg.alt.softer,
      },
    },
    expanded: {
      true: ({expandedWidth}) => ({
        width: expandedWidth,
        maxWidth: expandedWidth,
      }),
      false: ({collapsedWidth}) => ({
        width: collapsedWidth,
        maxWidth: collapsedWidth,
      }),
    },
    touched: {
      true: {},
      false: {
        animation: 'none',
      },
    },
  },
};
