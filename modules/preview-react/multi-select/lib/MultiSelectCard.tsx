import {comboboxCardStencil} from '@workday/canvas-kit-react/combobox';
import {
  ExtractProps,
  createElemPropsHook,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {calc, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

import {useMultiSelectModel} from './useMultiSelectModel';

export interface MultiSelectCardProps extends ExtractProps<typeof Menu.Card> {}

/**
 * This hook sets the `minWidth` style attribute to match the width of the
 * {@link MultiSelectInput MultiSelect.Input} component.
 */
export const useMultiSelectCard = createElemPropsHook(useMultiSelectModel)(model => {
  return {
    minWidth: calc.add(px2rem(model.state.width), px2rem(2)),
  };
});

export const MultiSelectCard = createSubcomponent('div')({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectCard,
})<MultiSelectCardProps>(({children, ...elemProps}, Element) => {
  const resolved = useResolvedStencil('MultiSelect.Card', comboboxCardStencil, undefined);

  return (
    <Menu.Card as={Element} {...handleCsProp(elemProps, resolved)}>
      {children}
    </Menu.Card>
  );
});
