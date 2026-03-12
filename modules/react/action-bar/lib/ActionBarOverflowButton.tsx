import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {
  createElemPropsHook,
  composeHooks,
  createSubcomponent,
  createSubModelElemPropsHook,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';

import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useActionBarModel} from './useActionBarModel';
import {SecondaryButton, SecondaryButtonProps} from '@workday/canvas-kit-react/button';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface ActionBarOverflowButtonProps extends SecondaryButtonProps {
  'aria-label': string;
}

export const actionBarOverflowButtonStencil = createStencil({
  base: {
    flex: 0,
  },
});

export const useActionBarOverflowButton = composeHooks(
  createElemPropsHook(useActionBarModel)(() => ({
    'aria-haspopup': true,
  })),
  useOverflowListTarget,
  createSubModelElemPropsHook(useActionBarModel)(m => m.menu, useMenuTarget)
);

const displayName = 'ActionBar.OverflowButton';

export const ActionBarOverflowButton = createSubcomponent('button')({
  displayName,
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarOverflowButton,
})<ActionBarOverflowButtonProps>((elemProps, Element) => {
  const resolved = useResolvedStencil(displayName, actionBarOverflowButtonStencil, undefined);
  return (
    <SecondaryButton as={Element} icon={relatedActionsIcon} {...mergeStyles(elemProps, resolved)} />
  );
});
