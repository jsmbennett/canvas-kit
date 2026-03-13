import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ToastIconProps extends Omit<SystemIconProps, 'colorHover'> {}

export const toastIconStencil = createStencil({
  base: {
    alignSelf: 'start',
    margin: `${system.space.x4} ${system.space.x3}`,
  },
});

const displayName = 'Toast.Icon';

export const ToastIcon = createComponent('div')({
  displayName,
  Component: (elemProps: ToastIconProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, toastIconStencil, undefined);
    return <SystemIcon ref={ref} as={Element} {...handleCsProp(elemProps, resolved)} />;
  },
});
