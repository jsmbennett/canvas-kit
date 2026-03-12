import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {CSProps, handleCsProp, createStencil} from '@workday/canvas-kit-styling';
import {getInitialsFromName} from './getInitialsFromName';

export interface AvatarNameProps extends CSProps {
  /**
   * The alt text of the Avatar image. This prop is also used for the initials. The first letter of the first name and the first letter of the second name are chosen for the initials.
   */
  name: string;
  /**
   * If you want full control over the initials, use `preferredInitials` instead.
   */
  preferredInitials?: string;
}

export const avatarNameStencil = createStencil({
  base: {
    textTransform: 'uppercase',
    cursor: 'default',
  },
});

const displayName = 'AvatarName';

export const AvatarName = createComponent('span')({
  displayName,
  Component: ({name, preferredInitials, ...elemProps}: AvatarNameProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, avatarNameStencil, undefined);
    return (
      <Element ref={ref} {...handleCsProp(elemProps, resolved)}>
        {preferredInitials || getInitialsFromName(name)}
      </Element>
    );
  },
});
