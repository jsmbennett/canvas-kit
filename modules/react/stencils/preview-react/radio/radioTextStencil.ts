import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {textStencil} from '../../react/text/textStencil';

export const radioTextStencil = defineStencil({
  extends: textStencil,
  base: {
    cursor: 'pointer',
  },
  modifiers: {
    variant: {
      inverse: {
        color: system.color.text.inverse,
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        color: system.color.text.disabled,
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: true},
      styles: {
        color: system.color.text.inverse,
        opacity: system.opacity.disabled,
      },
    },
  ],
  defaultModifiers: {
    typeLevel: 'subtext.large',
  },
});
