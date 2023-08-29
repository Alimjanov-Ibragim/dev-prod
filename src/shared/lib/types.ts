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
  | 'pencil-square'
  | 'dropzone-img'
  | 'line-circle-left'
  | 'line-arrow-right';

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

export type TType<ID = number> = {
  id: ID;
  title: string;
  color?: string;
};

export type TFile = {
  id: number;
  name: string;
  type: TType;
  originalName: string;
  size: number;
  mimeType: string;
  path: string;
  createdAt?: string;
};

export type TButtonStyles =
  | 'solid'
  | 'outlined'
  | 'ghost'
  | 'soft'
  | 'link'
  | 'white';

export type TButtonSizes = 'small' | 'default' | 'large';
export type TButtonShapes = 'default' | 'pilled';
export type TButtonColors =
  | 'dark'
  | 'gray'
  | 'green'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'light';

export type TButtonFontWeight =
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-black';

export type TButtonFontSize =
  | 'font-text-xs'
  | 'font-text-sm'
  | 'font-text-base'
  | 'font-text-lg'
  | 'font-text-xl'
  | 'font-text-2xl'
  | 'font-text-3xl'
  | 'font-text-4xl'
  | 'font-text-5xl';
