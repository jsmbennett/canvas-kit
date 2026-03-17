import type {StencilProviderMap} from '../common';
import type {StencilConfigInput} from '../common/lib/stencil/stencilOverrideProvider';

import {dividerStencil} from './preview-react/divider/dividerStencil';
import {loadingSparklesStencil} from './preview-react/loading-sparkles/loadingSparklesStencil';
import {pillCountStencil} from './preview-react/pill/pillCountStencil';
import {pillIconButtonStencil} from './preview-react/pill/pillIconButtonStencil';
import {pillIconStencil} from './preview-react/pill/pillIconStencil';
import {pillLabelStencil} from './preview-react/pill/pillLabelStencil';
import {radioGroupStencil} from './preview-react/radio/radioGroupStencil';
import {radioInputStencil} from './preview-react/radio/radioInputStencil';
import {radioLabelStencil} from './preview-react/radio/radioLabelStencil';
import {radioTextStencil} from './preview-react/radio/radioTextStencil';
import {statusIndicatorLabelStencil} from './preview-react/status-indicator/statusIndicatorLabelStencil';
import {actionBarListStencil} from './react/action-bar/actionBarListStencil';
import {actionBarOverflowButtonStencil} from './react/action-bar/actionBarOverflowButtonStencil';
import {avatarStencil} from './react/avatar/avatarStencil';
import {countBadgeStencil} from './react/badge/countBadgeStencil';
import {actionBarTextStencil} from './react/banner/actionBarTextStencil';
import {bannerIconStencil} from './react/banner/bannerIconStencil';
import {bannerLabelStencil} from './react/banner/bannerLabelStencil';
import {externalHyperlinkStencil} from './react/button/externalHyperlinkStencil';
import {hyperlinkStencil} from './react/button/hyperlinkStencil';
import {cardBodyStencil} from './react/card/cardBodyStencil';
import {cardHeadingStencil} from './react/card/cardHeadingStencil';
import {cardStencil} from './react/card/cardStencil';
import {checkboxBackgroundStencil} from './react/checkbox/checkboxBackgroundStencil';
import {checkboxCheckStencil} from './react/checkbox/checkboxCheckStencil';
import {checkboxContainerStencil} from './react/checkbox/checkboxContainerStencil';
import {checkboxInputStencil} from './react/checkbox/checkboxInputStencil';
import {checkboxRippleStencil} from './react/checkbox/checkboxRippleStencil';
import {indeterminateBoxStencil} from './react/checkbox/indeterminateBoxStencil';
import {comboboxMenuListStencil} from './react/combobox/comboboxMenuListStencil';
import {expandableAvatarStencil} from './react/expandable/expandableAvatarStencil';
import {expandableContainerStencil} from './react/expandable/expandableContainerStencil';
import {expandableContentStencil} from './react/expandable/expandableContentStencil';
import {expandableTargetStencil} from './react/expandable/expandableTargetStencil';
import {expandableTitleStencil} from './react/expandable/expandableTitleStencil';
import {formFieldContainerStencil} from './react/form-field/formFieldContainerStencil';
import {formFieldFieldStencil} from './react/form-field/formFieldFieldStencil';
import {formFieldGroupListStencil} from './react/form-field/formFieldGroupListStencil';
import {svgStencil} from './react/icon/svgStencil';
import {menuDividerStencil} from './react/menu/menuDividerStencil';
import {menuGroupHeadingStencil} from './react/menu/menuGroupHeadingStencil';
import {menuItemStencil} from './react/menu/menuItemStencil';
import {menuListStencil} from './react/menu/menuListStencil';
import {modalBodyStencil} from './react/modal/modalBodyStencil';
import {modalCardStencil} from './react/modal/modalCardStencil';
import {modalHeadingStencil} from './react/modal/modalHeadingStencil';
import {modalOverflowOverlayStencil} from './react/modal/modalOverflowOverlayStencil';
import {modalOverlayContainerStencil} from './react/modal/modalOverlayContainerStencil';
import {popupBodyStencil} from './react/popup/popupBodyStencil';
import {popupCloseIconStencil} from './react/popup/popupCloseIconStencil';
import {popupHeadingStencil} from './react/popup/popupHeadingStencil';
import {selectCardStencil} from './react/select/selectCardStencil';
import {selectInputStencil} from './react/select/selectInputStencil';
import {skeletonStencil} from './react/skeleton/skeletonStencil';
import {switchBackgroundStencil} from './react/switch/switchBackgroundStencil';
import {switchCircleStencil} from './react/switch/switchCircleStencil';
import {switchContainerStencil} from './react/switch/switchContainerStencil';
import {switchInputStencil} from './react/switch/switchInputStencil';
import {baseTableStencil} from './react/table/baseTableStencil';
import {tableBodyStencil} from './react/table/tableBodyStencil';
import {tableCaptionStencil} from './react/table/tableCaptionStencil';
import {tableCellStencil} from './react/table/tableCellStencil';
import {tableFooterStencil} from './react/table/tableFooterStencil';
import {tableHeaderStencil} from './react/table/tableHeaderStencil';
import {tableHeadStencil} from './react/table/tableHeadStencil';
import {tableRowStencil} from './react/table/tableRowStencil';
import {tableStencil} from './react/table/tableStencil';
import {tabItemStencil} from './react/tabs/tabItemStencil';
import {tabsOverflowButtonStencil} from './react/tabs/tabsOverflowButtonStencil';
import {textAreaStencil} from './react/text-area/textAreaStencil';
import {inputGroupStencil} from './react/text-input/inputGroupStencil';
import {bodyTextStencil} from './react/text/bodyTextStencil';
import {headingStencil} from './react/text/headingStencil';
import {labelTextStencil} from './react/text/labelTextStencil';
import {subtextStencil} from './react/text/subtextStencil';
import {textStencil} from './react/text/textStencil';
import {titleStencil} from './react/text/titleStencil';
import {toastBodyStencil} from './react/toast/toastBodyStencil';
import {toastCloseIconStencil} from './react/toast/toastCloseIconStencil';
import {toastIconStencil} from './react/toast/toastIconStencil';
import {toastMessageStencil} from './react/toast/toastMessageStencil';
import {toastStencil} from './react/toast/toastStencil';

const toStencilConfig = (stencil: unknown): StencilConfigInput =>
  stencil as StencilConfigInput;

/**
 * CK13-compatible stencil override map for CK15 displayName keys.
 *
 * Notes:
 * - Keys map to current CK15 component displayNames used by useResolvedStencil.
 * - Stencils are imported from the CK13 stencil library in this package.
 * - Token values are intentionally not normalized here; compile-safe token identifiers are the goal.
 */
export const ck13StencilProviderMap: StencilProviderMap = {
  'ActionBar.List': {stencil: toStencilConfig(actionBarListStencil)},
  'ActionBar.OverflowButton': {stencil: toStencilConfig(actionBarOverflowButtonStencil)},
  'Avatar': {stencil: toStencilConfig(avatarStencil)},
  'Banner.ActionTextText': {stencil: toStencilConfig(actionBarTextStencil)},
  'Banner.Icon': {stencil: toStencilConfig(bannerIconStencil)},
  'Banner.Label': {stencil: toStencilConfig(bannerLabelStencil)},
  'BaseTable': {stencil: toStencilConfig(baseTableStencil)},
  'BodyText': {stencil: toStencilConfig(bodyTextStencil)},
  'Card': {stencil: toStencilConfig(cardStencil)},
  'Card.Body': {stencil: toStencilConfig(cardBodyStencil)},
  'Card.Heading': {stencil: toStencilConfig(cardHeadingStencil)},
  'CheckBackground': {stencil: toStencilConfig(checkboxBackgroundStencil)},
  'CheckboxCheck': {stencil: toStencilConfig(checkboxCheckStencil)},
  'CheckboxCheck.IndeterminateBox': {stencil: toStencilConfig(indeterminateBoxStencil)},
  'CheckboxContainer': {stencil: toStencilConfig(checkboxContainerStencil)},
  'CheckboxInput': {stencil: toStencilConfig(checkboxInputStencil)},
  'CheckboxRipple': {stencil: toStencilConfig(checkboxRippleStencil)},
  'Combobox.Menu.List': {stencil: toStencilConfig(comboboxMenuListStencil)},
  'CountBadge': {stencil: toStencilConfig(countBadgeStencil)},
  'Divider': {stencil: toStencilConfig(dividerStencil)},
  'Expandable': {stencil: toStencilConfig(expandableContainerStencil)},
  'Expandable.Avatar': {stencil: toStencilConfig(expandableAvatarStencil)},
  'Expandable.Content': {stencil: toStencilConfig(expandableContentStencil)},
  'Expandable.Target': {stencil: toStencilConfig(expandableTargetStencil)},
  'Expandable.Title': {stencil: toStencilConfig(expandableTitleStencil)},
  'ExternalHyperlink': {stencil: toStencilConfig(externalHyperlinkStencil)},
  'FormField.Container': {stencil: toStencilConfig(formFieldContainerStencil)},
  'FormField.Field': {stencil: toStencilConfig(formFieldFieldStencil)},
  'FormFieldGroup.List': {stencil: toStencilConfig(formFieldGroupListStencil)},
  'Heading': {stencil: toStencilConfig(headingStencil)},
  'Hyperlink': {stencil: toStencilConfig(hyperlinkStencil)},
  'InputGroup': {stencil: toStencilConfig(inputGroupStencil)},
  'Label': {stencil: toStencilConfig(labelTextStencil)},
  'LoadingSparkles': {stencil: toStencilConfig(loadingSparklesStencil)},
  'Menu.Divider': {stencil: toStencilConfig(menuDividerStencil)},
  'Menu.Group.Heading': {stencil: toStencilConfig(menuGroupHeadingStencil)},
  'Menu.List': {stencil: toStencilConfig(menuListStencil)},
  'MenuItem': {stencil: toStencilConfig(menuItemStencil)},
  'MenuOption': {stencil: toStencilConfig(menuItemStencil)},
  'Modal.Body': {stencil: toStencilConfig(modalBodyStencil)},
  'Modal.Card': {stencil: toStencilConfig(modalCardStencil)},
  'Modal.Heading': {stencil: toStencilConfig(modalHeadingStencil)},
  'Modal.OpenOverlay': {stencil: toStencilConfig(modalOverlayContainerStencil)},
  'Modal.OverflowOverlay': {stencil: toStencilConfig(modalOverflowOverlayStencil)},
  'Pill.Count': {stencil: toStencilConfig(pillCountStencil)},
  'Pill.Icon': {stencil: toStencilConfig(pillIconStencil)},
  'Pill.IconButton': {stencil: toStencilConfig(pillIconButtonStencil)},
  'Pill.Label': {stencil: toStencilConfig(pillLabelStencil)},
  'Popup.Body': {stencil: toStencilConfig(popupBodyStencil)},
  'Popup.CloseIcon': {stencil: toStencilConfig(popupCloseIconStencil)},
  'Popup.Heading': {stencil: toStencilConfig(popupHeadingStencil)},
  'RadioButton.Text': {stencil: toStencilConfig(radioTextStencil)},
  'RadioGroup': {stencil: toStencilConfig(radioGroupStencil)},
  'RadioGroup.Label': {stencil: toStencilConfig(radioLabelStencil)},
  'Select.Card': {stencil: toStencilConfig(selectCardStencil)},
  'SelectInput': {stencil: toStencilConfig(selectInputStencil)},
  'Skeleton': {stencil: toStencilConfig(skeletonStencil)},
  'StatusIndicator.Label': {stencil: toStencilConfig(statusIndicatorLabelStencil)},
  'StyledRadioInput': {stencil: toStencilConfig(radioInputStencil)},
  'StyledTabItem': {stencil: toStencilConfig(tabItemStencil)},
  'Subtext': {stencil: toStencilConfig(subtextStencil)},
  'Svg': {stencil: toStencilConfig(svgStencil)},
  'SwitchBackground': {stencil: toStencilConfig(switchBackgroundStencil)},
  'SwitchCircle': {stencil: toStencilConfig(switchCircleStencil)},
  'SwitchContainer': {stencil: toStencilConfig(switchContainerStencil)},
  'SwitchInput': {stencil: toStencilConfig(switchInputStencil)},
  'Table': {stencil: toStencilConfig(tableStencil)},
  'Table.Body': {stencil: toStencilConfig(tableBodyStencil)},
  'Table.Caption': {stencil: toStencilConfig(tableCaptionStencil)},
  'Table.Cell': {stencil: toStencilConfig(tableCellStencil)},
  'Table.Footer': {stencil: toStencilConfig(tableFooterStencil)},
  'Table.Head': {stencil: toStencilConfig(tableHeadStencil)},
  'Table.Header': {stencil: toStencilConfig(tableHeaderStencil)},
  'Table.Row': {stencil: toStencilConfig(tableRowStencil)},
  'Tabs.OverflowButton': {stencil: toStencilConfig(tabsOverflowButtonStencil)},
  'Text': {stencil: toStencilConfig(textStencil)},
  'TextArea': {stencil: toStencilConfig(textAreaStencil)},
  'Title': {stencil: toStencilConfig(titleStencil)},
  'Toast': {stencil: toStencilConfig(toastStencil)},
  'Toast.Body': {stencil: toStencilConfig(toastBodyStencil)},
  'Toast.CloseIcon': {stencil: toStencilConfig(toastCloseIconStencil)},
  'Toast.Icon': {stencil: toStencilConfig(toastIconStencil)},
  'Toast.Message': {stencil: toStencilConfig(toastMessageStencil)},
};
