import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {baseTableCaptionStencil} from './baseTableCaptionStencil';

export const tableCaptionStencil = defineStencil({
  extends: baseTableCaptionStencil,
  base: {
    display: 'flex',
    borderBottom: `${px2rem(1)} solid ${system.color.border.container}`,
  },
});
