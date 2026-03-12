import {Hyperlink} from '@workday/canvas-kit-react/button';
import {createComponent, ExtractProps, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightLinkStencil = createStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      gridColumn: '2',
      justifySelf: 'start',
      color: system.color.text.strong,
      fontWeight: system.fontWeight.bold,
    };
  },
});

const displayName = 'InformationHighlight.Link';

export const Link = createComponent('a')({
  displayName,
  Component: ({...elemProps}: ExtractProps<typeof Hyperlink, never>, ref, Element) => {
    const resolved = useResolvedStencil(displayName, informationHighlightLinkStencil, undefined);
    return <Hyperlink as={Element} ref={ref} {...handleCsProp(elemProps, resolved)} />;
  },
});
