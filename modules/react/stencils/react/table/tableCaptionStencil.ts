import {baseTableCaptionStencil} from './baseTableCaptionStencil';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const tableCaptionStencil = {
  extends: baseTableCaptionStencil,
  base: {
    display: 'flex',
    borderBottom: `${px2rem(1)} solid ${system.color.border.container}`,
  },
};
