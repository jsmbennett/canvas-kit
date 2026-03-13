import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {mergeStyles} from '../../layout';
import {usePopupHeading, usePopupModel} from './hooks';

export interface PopupHeadingProps extends ExtractProps<typeof Card.Heading, never> {
  children?: React.ReactNode;
}

export const popupHeadingStencil = createStencil({
  base: {
    padding: system.space.x2,
  },
});

const displayName = 'Popup.Heading';

export const PopupHeading = createSubcomponent('h2')({
  displayName,
  modelHook: usePopupModel,
  elemPropsHook: usePopupHeading,
})<PopupHeadingProps>(({children, ...elemProps}, Element) => {
  const resolved = useResolvedStencil(displayName, popupHeadingStencil, undefined);
  return (
    <Card.Heading as={Element} {...mergeStyles(elemProps, resolved)}>
      {children}
    </Card.Heading>
  );
});
