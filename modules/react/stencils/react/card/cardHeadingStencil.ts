import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {textStencil} from '../text/textStencil';

export const cardHeadingStencil = defineStencil({
  extends: textStencil,
  base: {
    color: system.color.text.strong,
    fontWeight: system.fontWeight.bold,
    marginBottom: system.space.x6,
    marginTop: system.space.zero,
  },
  defaultModifiers: {typeLevel: 'body.large'},
});
