import {createSubcomponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';
import {system} from '@workday/canvas-tokens-web';

/**
 * @deprecated `formFieldContainerStencil` is deprecated and will be removed in a future major version. Please use `FormField.Field` to always wrap `FormField.Input` and `FormField.Hint` to always ensure correct label and input alignment.
 */
export const formFieldContainerStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
  },
});

/**
 * @deprecated `FormField.Container` is deprecated and will be removed in a future major version. Please use `FormField.Field` to always wrap `FormField.Input` and `FormField.Hint` to always ensure correct label and input alignment.
 */
const displayName = 'FormField.Container';

export const FormFieldContainer = createSubcomponent('div')({
  displayName,
  modelHook: useFormFieldModel,
})<CSProps>((elemProps, Element, model) => {
  const resolved = useResolvedStencil(displayName, formFieldContainerStencil, undefined);
  return <Element data-width="ck-formfield-width" {...handleCsProp(elemProps, resolved)} />;
});
