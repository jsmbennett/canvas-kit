import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const informationHighlightLinkStencil = defineStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      gridColumn: '2',
      justifySelf: 'start',
      color: system.color.text.strong,
      fontWeight: system.fontWeight.bold,
    };
  },
});
