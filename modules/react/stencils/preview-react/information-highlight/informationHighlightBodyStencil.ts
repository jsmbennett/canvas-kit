
import {system} from '@workday/canvas-tokens-web';

export const informationHighlightBodyStencil = {
  base: () => {
    return {
      ...system.type.subtext.large,
      color: system.color.text.strong,
      gridColumn: '2',
      marginBlockEnd: system.space.x2,
    };
  },
};
