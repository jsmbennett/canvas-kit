import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const informationHighlightHeadingStencil = defineStencil({
  base: () => {
    return {
      ...system.type.body.small,
      color: system.color.text.strong,
      gridColumn: '2',
      fontWeight: system.fontWeight.bold,
      marginTop: system.space.zero,
      marginBottom: system.space.zero,
    };
  },
});
