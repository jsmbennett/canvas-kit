
import {system} from '@workday/canvas-tokens-web';

export const selectInputStencil = {
  parts: {
    caret: 'select-caret-icon',
    caretContainer: 'select-caret-container',
    startIconContainer: 'select-start-icon-container',
    startIcon: 'select-start-icon',
    endIcon: 'select-end-icon',
    hiddenInput: 'select-hidden-input',
    visualInput: 'select-visual-input',
  },
  base: ({
    hiddenInputPart,
    startIconPart,
    endIconPart,
    visualInputPart,
    caretContainerPart,
    startIconContainerPart,
  }) => ({
    [hiddenInputPart]: {
      position: 'absolute',
      top: system.space.zero,
      bottom: system.space.zero,
      left: system.space.zero,
      right: system.space.zero,
      opacity: system.opacity.zero,
      cursor: 'default',
      pointerEvents: 'none',
      minWidth: '100%',
      width: '100%',
    },

    [`${startIconPart}, ${endIconPart}, ${caretContainerPart}, ${startIconContainerPart}`]: {
      position: 'absolute',
      pointerEvents: 'none',
    },
    [visualInputPart]: {
      caretColor: 'transparent',
      cursor: 'default',
      '&::selection': {
        backgroundColor: 'transparent',
      },
    },
  }),
};
