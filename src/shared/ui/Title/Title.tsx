import cn from 'classnames';

type Props = {
  text: string;
  className?: string;
};

export const Title = ({ text, className }: Props) => {
  return (
    <h1
      className={cn('text-xl font-semibold text-slate-800 text-left', {
        [className as string]: className,
      })}
    >
      {text}
    </h1>
  );
};
