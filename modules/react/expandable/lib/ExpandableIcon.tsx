import {
  createSubcomponent,
  ExtractProps,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {chevronUpIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {IconPositions} from '@workday/canvas-kit-react/button';
import {useExpandableModel} from './hooks/useExpandableModel';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export interface ExpandableIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`
   * @default chevronUpIcon
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   * @default 'start'
   */
  iconPosition?: IconPositions;
}

export const expandableIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    padding: system.space.x1,
  },
  modifiers: {
    isExpanded: {
      true: {},
      false: {},
    },
    position: {
      start: {},
      end: {},
      only: {},
    },
  },
  compound: [
    {
      modifiers: {position: 'end', isExpanded: false},
      styles: {
        marginInlineStart: 'auto',
        transform: 'rotate(180deg)',
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {position: 'end', isExpanded: true},
      styles: {
        marginInlineStart: 'auto',
        paddingInlineStart: system.space.x3,
      },
    },
    {
      modifiers: {position: 'start', isExpanded: false},
      styles: {
        marginInlineEnd: system.space.x2,
        transform: 'rotate(90deg)',
        ':dir(rtl)': {
          transform: 'rotate(-90deg)',
        },
      },
    },
    {
      modifiers: {position: 'start', isExpanded: true},
      styles: {
        marginInlineEnd: system.space.x2,
        transform: 'rotate(180deg)',
      },
    },
  ],
});

const displayName = 'Expandable.Icon';

export const ExpandableIcon = createSubcomponent('span')({
  displayName,
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableIcon,
})<ExpandableIconProps>(({icon, visible, iconPosition = 'start', ...elementProps}, Element) => {
  const resolved = useResolvedStencil(displayName, expandableIconStencil, {
    position: iconPosition,
    isExpanded: visible,
  });
  return (
    <SystemIcon
      as={Element}
      icon={icon || chevronUpIcon}
      {...mergeStyles(elementProps, resolved)}
    />
  );
});
