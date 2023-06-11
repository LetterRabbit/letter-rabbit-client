import ShareButton from 'components/domain/ShareButton';
import mail from '../../../assets/react.svg';
import css from './MailBox.module.scss';

interface Props {
  handleOpenBox: () => void;
}

const MailBox = ({ handleOpenBox }: Props) => {
  return (
    <div className={css.container}>
      <h1>명성님의 소중함</h1>
      <div className={css.imageBox}>
        <img src={mail} alt="mail" />
      </div>
      <button className={css.button} onClick={handleOpenBox}>
        소중함 열기
      </button>
      <ShareButton />
    </div>
  );
};

export default MailBox;
