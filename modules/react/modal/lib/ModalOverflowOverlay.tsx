import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

import {ModalOverlay} from './ModalOverlay';
import {useModalModel} from './hooks';

export const modalOverflowOverlayStencil = createStencil({
  base: {
    '& > div': {maxHeight: 'inherit'}, // reset maxHeight of centering div
    overflow: 'hidden auto',
  },
});

const displayName = 'Modal.OverflowOverlay';

export const ModalOverflowOverlay = createSubcomponent('div')({
  displayName,
  modelHook: useModalModel,
})<ExtractProps<typeof ModalOverlay, never>>((elemProps, Element) => {
  const resolved = useResolvedStencil(displayName, modalOverflowOverlayStencil, undefined);
  return <ModalOverlay as={Element} {...mergeStyles(elemProps, resolved)} />;
});
