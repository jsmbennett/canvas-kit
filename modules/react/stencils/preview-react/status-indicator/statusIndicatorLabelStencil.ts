
import {system} from '@workday/canvas-tokens-web';
import {textStencil} from '../../react/text/textStencil';

export const statusIndicatorLabelStencil = {
  extends: textStencil,
  base: {
    fontWeight: system.fontWeight.bold,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
    color: 'inherit',
  },
  defaultModifiers: {typeLevel: 'subtext.large'},
};
