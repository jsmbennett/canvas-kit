import * as React from 'react';

import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {ListItem, ListItemProps} from './common/List';
import {PaginationModel} from './types';
import {PaginationContext} from './usePaginationModel';

export interface PageListProps extends Omit<FlexProps, 'as' | 'children'> {
  model?: PaginationModel;
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const paginationPageListStencil = createStencil({
  base: {
    display: 'flex',
    margin: system.space.zero,
    paddingInlineStart: system.space.zero,
    paddingInlineEnd: system.space.zero,
    gap: system.space.x1,
  },
});

const pageListDisplayName = 'Pagination.PageList';

export const PageList = createComponent('ol')({
  displayName: pageListDisplayName,
  Component({children, ...elemProps}: PageListProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const resolved = useResolvedStencil(pageListDisplayName, paginationPageListStencil, undefined);
    return (
      <Element ref={ref} role="list" {...mergeStyles(elemProps, resolved)}>
        {typeof children === 'function' ? children(model) : children}
      </Element>
    );
  },
});

export interface PageListItemProps extends ListItemProps {}

export const PageListItem = createComponent('li')({
  displayName: 'Pagination.PageListItem',
  Component({children, ...elemProps}: PageListItemProps, ref, Element) {
    return (
      <ListItem ref={ref} as={Element} {...elemProps}>
        {children}
      </ListItem>
    );
  },
});
