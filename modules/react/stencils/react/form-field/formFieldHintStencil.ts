import {brand, system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {textStencil} from '../text/textStencil';

export const formFieldHintStencil = defineStencil({
  extends: textStencil,
  base: {
    margin: system.space.zero,
  },
  modifiers: {
    error: {
      error: {
        color: brand.error.base,
      },
      caution: {},
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.medium',
  },
});
