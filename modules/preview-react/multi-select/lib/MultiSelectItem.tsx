import {Combobox, useComboboxMenuItem} from '@workday/canvas-kit-react/combobox';
import {
  ExtractProps,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {StyledMenuItem, menuItemStencil} from '@workday/canvas-kit-react/menu';
import {handleCsProp} from '@workday/canvas-kit-styling';

import {useMultiSelectModel} from './useMultiSelectModel';

export const useMultiSelectItem = composeHooks(
  createElemPropsHook(useMultiSelectModel)(({state}) => {
    return {
      role: 'option',
    };
  }),
  useComboboxMenuItem
);

export const MultiSelectItem = createSubcomponent('li')({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectItem,
  subComponents: {
    Icon: Combobox.Menu.Item.Icon,
  },
})<ExtractProps<typeof Combobox.Menu.Item>>(({children, ...elemProps}, Element, _model) => {
  const resolved = useResolvedStencil('MultiSelect.Item', menuItemStencil, undefined);

  return (
    <StyledMenuItem as={Element} {...handleCsProp(elemProps, resolved)}>
      {children}
    </StyledMenuItem>
  );
});
