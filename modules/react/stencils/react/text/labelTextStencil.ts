import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {textStencil} from './textStencil';

export const labelTextStencil = defineStencil({
  extends: textStencil,
  base: {
    ...system.type.subtext.large,
    color: system.color.text.default,
  },
  modifiers: {
    disabled: {
      true: {
        cursor: 'default',
        color: system.color.text.disabled,
      },
    },
    variant: {
      inverse: {color: system.color.text.inverse},
      error: {color: system.color.text.critical.default},
      hint: {color: system.color.text.hint},
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: true},
      styles: {
        opacity: system.opacity.disabled,
        color: system.color.text.inverse,
      },
    },
  ],
});
