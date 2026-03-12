import {createComponent, ExtractProps, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Heading} from '@workday/canvas-kit-react/text';

const informationHighlightHeadingStencil = createStencil({
  base: () => {
    return {
      ...system.type.body.small,
      color: system.color.text.strong,
      gridColumn: '2',
      fontWeight: system.fontWeight.bold,
      marginTop: system.space.zero,
      marginBottom: system.space.zero,
    };
  },
});

export interface InformationHighlightHeadingProps
  extends Partial<ExtractProps<typeof Heading, never>> {}

const displayName = 'InformationHighlight.Heading';

export const InformationHighlightHeading = createComponent('h3')({
  displayName,
  Component: ({size = 'small', ...elemProps}: InformationHighlightHeadingProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, informationHighlightHeadingStencil, undefined);
    return <Heading as={Element} ref={ref} size={size} {...handleCsProp(elemProps, resolved)} />;
  },
});
