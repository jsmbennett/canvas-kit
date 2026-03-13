import {createSubcomponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {FlexProps} from '@workday/canvas-kit-react/layout';
import {CSProps, calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

export interface FormFieldGroupListProps extends CSProps, FlexProps {}

const formFieldGroupListStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: system.shape.x1Half,
    gap: system.space.x2,
    padding: `${px2rem(10)} ${system.space.x3} ${system.space.x2}`,
    margin: `0 ${calc.negate(system.space.x3)}`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        backgroundColor: brand.error.lightest,
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.common.errorInner}`,
      },
      caution: {
        backgroundColor: brand.alert.lightest,
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.common.alertOuter}, inset 0 0 0 ${px2rem(3)} ${
          brand.common.alertInner
        }`,
      },
    },
  },
});

const displayName = 'FormFieldGroup.List';

export const FormFieldGroupList = createSubcomponent('div')({
  displayName,
  modelHook: useFormFieldModel,
})<FormFieldGroupListProps>(({children, ...elemProps}, Element, model) => {
  const resolved = useResolvedStencil(displayName, formFieldGroupListStencil, {
    error: model.state.error,
  });
  return (
    <Element data-width="ck-formfield-width" {...handleCsProp(elemProps, resolved)}>
      {children}
    </Element>
  );
});
