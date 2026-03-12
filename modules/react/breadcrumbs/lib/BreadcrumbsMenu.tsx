import {
  createContainer,
  createComponent,
  ExtractProps,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {Menu, useMenuModel} from '@workday/canvas-kit-react/menu';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

export const breadcrumbsMenuItemStencil = createStencil({
  base: {
    textDecoration: 'none',
  },
});

const breadcrumbsMenuItemDisplayName = 'Breadcrumbs.Menu.Item';

export const BreadcrumbsMenuItem = createComponent('a')({
  displayName: breadcrumbsMenuItemDisplayName,
  Component: (props: ExtractProps<typeof Menu.Item, never>, ref, Element) => {
    const resolved = useResolvedStencil(
      breadcrumbsMenuItemDisplayName,
      breadcrumbsMenuItemStencil,
      undefined
    );
    return <Menu.Item as={Element} {...handleCsProp(props, resolved)} ref={ref} />;
  },
});

export const breadcrumbsMenuCardStencil = createStencil({
  base: {
    width: px2rem(280),
    maxWidth: px2rem(280),
    maxHeight: px2rem(296),
  },
});

const breadcrumbsMenuCardDisplayName = 'Breadcrumbs.Menu.Card';

export const BreadcrumbsMenuCard = (elemProps: ExtractProps<typeof Menu.Card, never>) => {
  const resolved = useResolvedStencil(
    breadcrumbsMenuCardDisplayName,
    breadcrumbsMenuCardStencil,
    undefined
  );
  return <Menu.Card {...handleCsProp(elemProps, resolved)} />;
};

export const BreadcrumbsMenu = createContainer()({
  displayName: 'Breadcrumbs.Menu',
  modelHook: useMenuModel,
  subComponents: {
    Card: BreadcrumbsMenuCard,
    List: Menu.List,
    Item: BreadcrumbsMenuItem,
    Divider: Menu.Divider,
    Target: Menu.Target,
    TargetContext: Menu.TargetContext,
    Popper: Menu.Popper,
  },
})<ExtractProps<typeof Menu>>(({children}) => {
  return <>{children}</>;
});
