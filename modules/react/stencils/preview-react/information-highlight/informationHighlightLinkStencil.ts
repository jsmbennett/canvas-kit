
import {system} from '@workday/canvas-tokens-web';

export const informationHighlightLinkStencil = {
  base: () => {
    return {
      ...system.type.subtext.large,
      gridColumn: '2',
      justifySelf: 'start',
      color: system.color.text.strong,
      fontWeight: system.fontWeight.bold,
    };
  },
};
