import {defineStencil} from '../../defineStencil';
import {textStencil} from '../text/textStencil';

export const cardBodyStencil = defineStencil({
  extends: textStencil,
  base: {},
  defaultModifiers: {typeLevel: 'subtext.large'},
});
