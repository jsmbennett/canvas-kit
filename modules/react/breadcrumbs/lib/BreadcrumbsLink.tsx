import {Hyperlink, HyperlinkProps} from '@workday/canvas-kit-react/button';
import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export interface BreadcrumbsLinkProps extends HyperlinkProps {
  /**
   * The href url of the anchor tag
   */
  href: string;
  /**
   * The max-width of the link text
   *
   * @default 350px
   */
  maxWidth?: string | number;
  tooltipProps?: OverflowTooltipProps | {};
}

export const breadcrumbsLinkStencil = createStencil({
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    fontFamily: system.fontFamily.default,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    fontWeight: system.fontWeight.normal,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth,
  }),
});

const displayName = 'Breadcrumbs.Link';

export const BreadcrumbsLink = createComponent('a')({
  displayName,
  Component: (
    {maxWidth = 350, href, tooltipProps = {}, children, ...elemProps}: BreadcrumbsLinkProps,
    ref,
    Element
  ) => {
    const resolved = useResolvedStencil(displayName, breadcrumbsLinkStencil, {
      maxWidth: typeof maxWidth === 'number' ? px2rem(maxWidth) : maxWidth,
    });
    return (
      <OverflowTooltip {...tooltipProps}>
        <Hyperlink
          href={href}
          ref={ref}
          as={Element}
          role="link"
          variant="standalone"
          {...handleCsProp(elemProps, resolved)}
        >
          {children}
        </Hyperlink>
      </OverflowTooltip>
    );
  },
});
