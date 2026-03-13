import {Combobox} from '@workday/canvas-kit-react/combobox';
import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {menuCardStencil} from '@workday/canvas-kit-react/menu';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

import {useSelectCard} from './hooks/useSelectCard';
import {useSelectModel} from './hooks/useSelectModel';

export const selectCardStencil = createStencil({
  base: {
    [menuCardStencil.vars.maxHeight]: px2rem(300),
  },
});

const displayName = 'Select.Card';

export const SelectCard = createSubcomponent('div')({
  displayName,
  modelHook: useSelectModel,
  elemPropsHook: useSelectCard,
})<ExtractProps<typeof Combobox.Menu.Card>>(({children, ...elemProps}, Element) => {
  const resolved = useResolvedStencil(displayName, selectCardStencil, undefined);
  return (
    <Combobox.Menu.Card as={Element} {...handleCsProp(elemProps, resolved)}>
      {children}
    </Combobox.Menu.Card>
  );
});
