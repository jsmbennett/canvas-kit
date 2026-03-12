import * as React from 'react';

import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {
  createElemPropsHook,
  composeHooks,
  createSubModelElemPropsHook,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';

import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useTabsModel} from './useTabsModel';
import {StyledTabItem} from './TabsItem';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface OverflowButtonProps {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
}

const tabsOverflowButtonStencil = createStencil({
  base: {
    '&:has([data-part="tabs-overflow-button-icon"])': {
      display: 'flex',
      gap: system.space.zero,
    },
  },
});

export const useTabsOverflowButton = composeHooks(
  createElemPropsHook(useTabsModel)(() => {
    return {
      'aria-haspopup': true,
    } as const;
  }),
  useOverflowListTarget,
  createSubModelElemPropsHook(useTabsModel)(m => m.menu, useMenuTarget)
);

const displayName = 'Tabs.OverflowButton';

export const TabsOverflowButton = createSubcomponent('button')({
  displayName,
  modelHook: useTabsModel,
  elemPropsHook: useTabsOverflowButton,
})<OverflowButtonProps>(({children, ...elemProps}, Element) => {
  const resolved = useResolvedStencil(displayName, tabsOverflowButtonStencil, undefined);
  return (
    <StyledTabItem type="button" as={Element} {...mergeStyles(elemProps, resolved)}>
      <span>{children}</span>
      <SystemIcon data-part="tabs-overflow-button-icon" icon={chevronDownSmallIcon} />
    </StyledTabItem>
  );
});
