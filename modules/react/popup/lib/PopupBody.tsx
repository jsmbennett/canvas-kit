import {Card} from '@workday/canvas-kit-react/card';
import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {mergeStyles} from '../../layout';
import {usePopupModel} from './hooks';

export const popupBodyStencil = createStencil({
  base: {
    overflowY: 'auto',
    padding: system.space.x2,
  },
});

const displayName = 'Popup.Body';

export const PopupBody = createSubcomponent('div')({
  displayName,
  modelHook: usePopupModel,
})<ExtractProps<typeof Card.Body>>(elemProps => {
  const resolved = useResolvedStencil(displayName, popupBodyStencil, undefined);
  return <Card.Body {...mergeStyles(elemProps, resolved)} />;
});
