import { ReactNode } from 'react';

export type TIcon =
  | 'search'
  | 'check'
  | 'plus'
  | 'download'
  | 'filter'
  | 'pencil-fill'
  | 'arrow-bar-left'
  | 'arrow-bar-right'
  | 'house'
  | 'check2-circle'
  | 'check2-square'
  | 'person'
  | 'person-fill'
  | 'people'
  | 'house-door'
  | 'layers'
  | 'building'
  | 'cloud-download'
  | 'globe2'
  | 'flag'
  | 'brightness-high'
  | 'info-circle'
  | 'dash'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'chevron-up'
  | 'calendar4-range'
  | 'printer'
  | 'excel'
  | 'pdf'
  | 'word'
  | 'x'
  | 'preline-slash'
  | 'logo'
  | 'logo-without-text'
  | 'trash-fill'
  | 'houses'
  | 'pencil-square';

export type TInputStyleType = 'bordered' | 'underline' | 'light';

export type TInputSize = 'small' | 'default' | 'large';

export type TInputShape = 'rounded' | 'pilled';

export type TTabsItem = {
  badgeText?: string;
  icon?: TIcon;
  disabled?: boolean;
  maxWidth: string;
  width: string;
  title: string;
  renderContent: () => ReactNode;
};

export type TTabsTypeStyle =
  | 'base'
  | 'bordered'
  | 'segment'
  | 'pills'
  | 'pills-gray';
