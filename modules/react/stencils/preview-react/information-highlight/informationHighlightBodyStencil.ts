import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const informationHighlightBodyStencil = defineStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      color: system.color.text.strong,
      gridColumn: '2',
      marginBlockEnd: system.space.x2,
    };
  },
});
