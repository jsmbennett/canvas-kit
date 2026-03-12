import {createComponent, ExtractProps, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      color: system.color.text.strong,
      gridColumn: '2',
      marginBlockEnd: system.space.x2,
    };
  },
});

const displayName = 'InformationHighlight.Body';

export const Body = createComponent('div')({
  displayName,
  Component: ({...elemProps}: ExtractProps<typeof Text, never>, ref, Element) => {
    const resolved = useResolvedStencil(displayName, informationHighlightBodyStencil, undefined);
    return <Text as={Element} ref={ref} {...handleCsProp(elemProps, resolved)} />;
  },
});
