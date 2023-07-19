import { useSearchParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import ShareButton from 'components/domain/ShareButton';
import { useOpenMailBox } from 'services/queries/letter.query';
import css from './MailBox.module.scss';

interface Props {
  handleOpenBox: () => void;
}

const MailBox = ({ handleOpenBox }: Props) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();

  const { data } = useOpenMailBox(`?${query}`);
  const count = data?.total_count || 0;

  return (
    <>
      <span className={css.description}>
        나의 소중함에 <br />총 {count}개의 마음이 전달됐어요!
      </span>
      <div className={css.buttonWrap}>
        <Button title="마음 확인하기" clickAction={handleOpenBox} />
        <ShareButton />
      </div>
    </>
  );
};

export default MailBox;
