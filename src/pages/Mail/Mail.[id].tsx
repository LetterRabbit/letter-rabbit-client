import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useOpenMail } from 'services/queries/letter.query';
import back from '../../assets/back.png';
import css from './Mail.module.scss';

const Mail = () => {
  const { id } = useParams();
  const { data, refetch } = useOpenMail(id || '');
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [id]);

  if (!data) return null;

  const { letters, total_list } = data;

  const nextMailIndex =
    total_list.indexOf(letters.id) + 1 === total_list.length
      ? null
      : total_list[total_list.indexOf(letters.id) + 1];

  const handleNextMail = () => {
    if (nextMailIndex) {
      navigate(`/mail/${nextMailIndex}`);
    }
  };

  return (
    <section className={css.container}>
      <div className={css.iconWrap}>
        <img
          src={back}
          alt="back button"
          className={css.back}
          onClick={() => {
            navigate(`/mailbox/${id}`, { state: false });
          }}
        />
      </div>
      <div className={css.letterWrap}>
        <h3 className={css.author}>From. {letters.username}</h3>
        <div className={css.description}>{letters.description}</div>
        {nextMailIndex && <button onClick={handleNextMail}>다음 편지</button>}
      </div>
    </section>
  );
};

export default Mail;
