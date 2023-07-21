import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import { useOpenMail } from 'services/queries/letter.query';
import back from '../../assets/back.svg';
import css from './Mail.module.scss';

const Mail = () => {
  const { id } = useParams();
  const { data, refetch } = useOpenMail(id || '');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [id]);

  if (!data) return null;

  const { id: letterId, desc, username, total_list } = data;

  const nextMailIndex =
    total_list.indexOf(letterId) + 1 === total_list.length
      ? null
      : total_list[total_list.indexOf(letterId) + 1];

  const handleNextMail = () => {
    if (nextMailIndex) {
      navigate(`/mail/${nextMailIndex}`, { state: location.state });
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
            navigate(`${location.state}`);
          }}
        />
      </div>
      <div className={css.letterWrap}>
        <h3 className={css.author}>From. {username}</h3>
        <div className={css.description}>{desc}</div>
        {nextMailIndex && (
          <Button title="다음 편지" clickAction={handleNextMail} />
        )}
      </div>
    </section>
  );
};

export default Mail;
