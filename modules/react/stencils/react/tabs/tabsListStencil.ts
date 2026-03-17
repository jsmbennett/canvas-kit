import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const tabsListStencil = {
  base: {
    display: 'flex',
    position: 'relative',
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    gap: system.space.x3,
    paddingInline: system.space.x6,
  },
  modifiers: {
    modality: {
      touch: {
        overflowX: 'auto',
        paddingInline: system.space.zero,
        // data attributes are needed until scroll-driven animations are supported. Once they are,
        // we can use a CSS-only solution:
        // https://www.bram.us/2023/09/16/solved-by-css-scroll-driven-animations-detect-if-an-element-can-scroll-or-not/
        '&[data-scroll-position="start"]': {
          maskImage: 'linear-gradient(to right, white 80%, transparent)',
        },
        '&[data-scroll-position="middle"]': {
          maskImage:
            'linear-gradient(to left, white 80%, transparent), linear-gradient(to right, white 80%, transparent)',
          maskComposite: 'intersect',
        },
        '&[data-scroll-position="end"]': {
          maskImage: 'linear-gradient(to left, white 80%, transparent)',
        },
      },
      mouse: {},
      pen: {},
    },
    isDragging: {
      true: {},
      false: {},
    },
    direction: {
      left: {},
      right: {},
    },
  },
};
