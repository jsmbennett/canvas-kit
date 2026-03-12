import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export interface ListProps extends FlexProps {}

export const paginationListStencil = createStencil({
  base: {
    display: 'flex',
    marginBlock: system.space.zero,
    marginInline: system.space.zero,
    padding: system.space.zero,
    listStyle: 'none',
  },
});

const listDisplayName = 'Pagination.List';

export const List = createComponent('ul')({
  displayName: listDisplayName,
  Component: ({children, ...elemProps}: ListProps, ref, Element) => {
    const resolved = useResolvedStencil(listDisplayName, paginationListStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});

export interface ListItemProps extends FlexProps {}

export const paginationListItemStencil = createStencil({
  base: {
    display: 'flex',
  },
});

const listItemDisplayName = 'Pagination.ListItem';

export const ListItem = createComponent('li')({
  displayName: listItemDisplayName,
  Component: ({children, ...elemProps}: ListItemProps, ref, Element) => {
    const resolved = useResolvedStencil(listItemDisplayName, paginationListItemStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
