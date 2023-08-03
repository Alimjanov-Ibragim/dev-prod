import cn from 'classnames';
import { ReactComponent as CircleIcon } from './circle.svg';

type TColors = 'dark' | 'gray' | 'green' | 'blue' | 'red' | 'yellow' | 'light';

type Props = {
  /** ClassName for change to unique color or etc. */
  className?: string;
  /** Width of indicator */
  width?: string;
  /** Height of indicator */
  height?: string;
  /** Colors of indicator: "dark" | "gray" | "green" | "blue" | "red" | "yellow" | "light" */
  color?: TColors;
};

export const Indicator = ({
  color = 'blue',
  className,
  width = '8',
  height = '8',
}: Props) => {
  return (
    <CircleIcon
      className={cn('', {
        'fill-gray-800': color === 'dark',
        'fill-gray-500': color === 'gray',
        'fill-teal-500': color === 'green',
        'fill-blue-500': color === 'blue',
        'fill-red-500': color === 'red',
        'fill-yellow-500': color === 'yellow',
        'fill-white': color === 'light',
        [className as string]: className,
      })}
      width={width}
      height={height}
    />
  );
};
