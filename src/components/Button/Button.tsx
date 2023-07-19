import { cn } from 'styles/utils';

import css from './Button.module.scss';

interface Props {
  size?: string;
  type?: string;
  font?: string;
  title: string;
  clickAction: () => void;
}

const Button = ({
  size = 'large',
  type = 'main',
  font = 'regular',
  title,
  clickAction,
}: Props) => {
  return (
    <button
      className={cn(css[size], css[type], css[font], css.default)}
      onClick={clickAction}
    >
      {title}
    </button>
  );
};

export default Button;
