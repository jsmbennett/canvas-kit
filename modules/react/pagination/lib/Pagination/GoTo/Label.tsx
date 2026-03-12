import * as React from 'react';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {Subtext} from '@workday/canvas-kit-react/text';
import {PaginationContext} from '../usePaginationModel';
import {PaginationModel} from '../types';

export interface GoToLabelProps {
  /**
   * Accepts child elements or a render prop.
   */
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

export const paginationGoToLabelStencil = createStencil({
  base: {
    whiteSpace: 'nowrap',
  },
});

const displayName = 'Pagination.GoToLabel';

export const GoToLabel = createComponent('label')({
  displayName,
  Component({children, ...elemProps}: GoToLabelProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const resolved = useResolvedStencil(displayName, paginationGoToLabelStencil, undefined);
    return (
      <Subtext
        ref={ref}
        as={Element}
        size="medium"
        variant="hint"
        {...handleCsProp(elemProps, resolved)}
      >
        {typeof children === 'function' ? children(model) : children}
      </Subtext>
    );
  },
});
