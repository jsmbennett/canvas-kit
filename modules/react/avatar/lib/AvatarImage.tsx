import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';

export interface AvatarImageProps extends CSProps {}

export const avatarImageStencil = createStencil({
  base: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});

const displayName = 'AvatarImage';

export const AvatarImage = createComponent('img')({
  displayName,
  Component: ({...elemProps}: AvatarImageProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, avatarImageStencil, undefined);
    return <Element ref={ref} {...handleCsProp(elemProps, resolved)} />;
  },
});
