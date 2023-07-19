import box from '../../assets/box.svg';
import css from './PointText.module.scss';

interface Props {
  type: string;
}

type TypeText = {
  [key: string]: string;
};

const PointText = ({ type }: Props) => {
  return (
    <span className={css.container}>
      {type === 'box' && <img className={css.icon} src={box} alt="box" />}
      <span className={css.text}>{TYPE_TEXT[type]}</span>
    </span>
  );
};

export default PointText;

const TYPE_TEXT: TypeText = {
  box: '소중함',
  letter: '마음',
};
