import * as React from 'react';

export const SearchTheme = {
  Light: 'light',
  Dark: 'dark',
} as const;

export type SearchTheme = (typeof SearchTheme)[keyof typeof SearchTheme];
export type SearchThemeAttributes = Record<string, unknown>;
export const searchFormStencil = {
  vars: {
    background: '--search-form-background',
    backgroundHover: '--search-form-background-hover',
    color: '--search-form-color',
    placeholderColor: '--search-form-placeholder-color',
  },
};

type SearchFormProps = {
  autocompleteItems?: React.ReactNode;
  onInputChange?: (event: any) => void;
  onSubmit?: (event?: any) => void;
  [key: string]: any;
};

export const SearchForm = React.forwardRef<HTMLDivElement, SearchFormProps>(function SearchForm(
  {autocompleteItems, onInputChange, onSubmit, ...props},
  ref
) {
  return (
    <div ref={ref} {...props}>
      {autocompleteItems}
      <button
        type="button"
        onClick={event => {
          onInputChange?.(event);
          onSubmit?.(event);
        }}
      >
        Search
      </button>
    </div>
  );
});
