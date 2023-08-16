import { TIcon } from 'shared/lib';

export type TStatus = 'offline' | 'online' | 'away' | 'do-not-disturb' | 'icon';

export type TColor =
  | 'dark'
  | 'gray'
  | 'green'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'light';

export type TStyleType = 'image' | 'placeholder' | 'white' | 'solid' | 'soft';

export type TSize = 'xs' | 'small' | 'default' | 'large';

export type TShape = 'rounded' | 'circular';

export type TAvatarProps = {
  /** Status(icon, or status circle): "offline" | "online" | "away" | "do-not-disturb" | "icon" */
  status?: TStatus;
  /** Status icon's name: "search" | "check" | "plus" | "download" | "filter" etc.
   * works with "status" props.
   */
  nameStatusIcon?: TIcon;
  /** Color theme style type: "dark" | "gray" | "green" | "blue" | "red" | "yellow" | "light".
   * works with "solid" || "soft" props.
   */
  color?: TColor;
  /** Avatar's shape: "rounded" | "circular" */
  shape?: TShape;
  /** Avatar's size: "xs" | "small" | "default" | "large" */
  size?: TSize;
  /** Avatar's style type: "image" | "placeholder" | "white" | "solid" | "soft" */
  styleType?: TStyleType;
  /** Image sourse path. Works with style type equal "image" */
  imageSrc?: string;
  /** Common wrapper classname. */
  wrapClassName?: string;
  /** Classname of status. */
  classNameStatus?: string;
  /** Classname of status icon. */
  classNameStatusIcon?: string;
  /** Classname title text. */
  classNameTextTitle?: string;
  /** Classname body text. */
  classNameTextBody?: string;
  /** Classname image concept tag. */
  imageWrapClassName?: string;
  /** Classname text wrap */
  classNameTextWrap?: string;
  /** Title text */
  textTitle?: string;
  /** Body text */
  textBody?: string;
  /** Border of avatar(className) */
  borderedClassName?: string;
};
