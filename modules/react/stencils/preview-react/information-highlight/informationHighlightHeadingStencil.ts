
import {system} from '@workday/canvas-tokens-web';

export const informationHighlightHeadingStencil = {
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
};
