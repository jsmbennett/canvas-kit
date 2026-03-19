import * as React from 'react';

export type ComboBoxMenuItemGroup = {
  header?: React.ReactNode;
  items?: React.ReactNode[];
};

export type ComboboxProps = {
  autocompleteItems?: Array<React.ReactNode | ComboBoxMenuItemGroup>;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Combobox: React.FC<ComboboxProps> = ({children, autocompleteItems, ...props}) => {
  return (
    <div {...props}>
      {children}
      {autocompleteItems?.map((item, index) => {
        if (item && typeof item === 'object' && 'items' in (item as ComboBoxMenuItemGroup)) {
          const group = item as ComboBoxMenuItemGroup;
          return (
            <div key={index}>
              {group.header}
              {group.items}
            </div>
          );
        }

        return <div key={index}>{item as React.ReactNode}</div>;
      })}
    </div>
  );
};
