import {brand, system} from '@workday/canvas-tokens-web';

import {textStencil} from '../text/textStencil';

export const formFieldHintStencil = {
  extends: textStencil,
  base: {
    margin: system.space.zero,
  },
  modifiers: {
    error: {
      error: {
        color: brand.error.base,
      },
      alert: {},
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.medium',
  },
};
