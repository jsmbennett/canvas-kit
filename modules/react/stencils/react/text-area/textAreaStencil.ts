import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {textInputStencil} from '../text-input/textInputStencil';

export const textAreaStencil = {
  extends: textInputStencil,
  base: {
    minHeight: system.space.x16,
    minWidth: calc.add(calc.multiply(system.space.x20, 3), system.space.x10),
    '&::webkit-resizer': {
      display: 'none',
    },
  },

  modifiers: {
    resize: {
      both: {
        resize: 'both',
      },
      horizontal: {
        resize: 'horizontal',
      },
      vertical: {
        resize: 'vertical',
      },
      none: {
        resize: 'none',
      },
    },
  },
  defaultModifiers: {
    resize: 'both',
  },
};
