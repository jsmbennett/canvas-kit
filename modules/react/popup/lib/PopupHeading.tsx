import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {mergeStyles} from '../../layout';
import {usePopupHeading, usePopupModel} from './hooks';

export interface PopupHeadingProps extends ExtractProps<typeof Card.Heading, never> {
  children?: React.ReactNode;
}

export const popupHeadingStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    paddingInline: cssVar(system.padding.xs, system.space.x2),
  },
});

export const PopupHeading = createSubcomponent('h2')({
  displayName: 'Popup.Heading',
  modelHook: usePopupModel,
  elemPropsHook: usePopupHeading,
})<PopupHeadingProps>(({children, ...elemProps}, Element) => {
  const resolved = useResolvedStencil('Popup.Heading', popupHeadingStencil, undefined);
  return (
    <Card.Heading as={Element} {...mergeStyles(elemProps, resolved)}>
      {children}
    </Card.Heading>
  );
});
