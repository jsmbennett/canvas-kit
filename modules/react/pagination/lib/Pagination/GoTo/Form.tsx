import * as React from 'react';

import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

import {GoToContext, useGoToForm} from './useGoToForm';
import {PaginationContext} from '../usePaginationModel';

export interface GoToFormProps extends FlexProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const paginationGoToFormStencil = createStencil({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: system.space.x2,
    ':dir(rtl)': {
      paddingInlineStart: system.space.x2,
      paddingInlineEnd: system.space.x2,
    },
  },
});

const displayName = 'Pagination.GoToForm';

export const GoToForm = createComponent('form')({
  displayName,
  Component({children, onSubmit, ...elemProps}: GoToFormProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const goToContext = useGoToForm({model, onSubmit});
    const {formProps} = goToContext;
    const resolved = useResolvedStencil(displayName, paginationGoToFormStencil, undefined);

    return (
      <GoToContext.Provider value={goToContext}>
        <Element ref={ref} {...mergeStyles({...formProps, ...elemProps}, resolved)}>
          {children}
        </Element>
      </GoToContext.Provider>
    );
  },
});
