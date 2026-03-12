import * as React from 'react';

import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {TextInput, TextInputProps} from '@workday/canvas-kit-react/text-input';

import {GoToContext} from './useGoToForm';

export type GoToTextInputProps = TextInputProps & {
  'aria-label': string;
  value?: string | number;
};

export const paginationGoToTextInputStencil = createStencil({
  base: {
    minWidth: px2rem(55),
    width: px2rem(55),
  },
});

const displayName = 'Pagination.GoToTextInput';

export const GoToTextInput = createComponent('input')({
  displayName,
  Component(elemProps: GoToTextInputProps, ref, Element) {
    const {inputProps} = React.useContext(GoToContext);
    const resolved = useResolvedStencil(displayName, paginationGoToTextInputStencil, undefined);

    return (
      <TextInput
        ref={ref}
        as={Element}
        size={1}
        {...handleCsProp({...inputProps, ...elemProps}, resolved)}
      />
    );
  },
});
