import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useOpenMailBox } from 'services/queries/letter.query';
import { MailBox } from 'services/types/letter';
import back from '../../../assets/back.png';
import css from './ListBox.module.scss';

const ListBox = () => {
  const [skip, setSkip] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, refetch } = useOpenMailBox(`?limit=5&skip=${skip}`);
  const count = data?.total_count || 0;
  const pageArr = new Array(Math.ceil(count / 5)).fill(1);

  useEffect(() => {
    refetch();
  }, [skip]);

  return (
    <div className={css.container}>
      <div className={css.iconWrap}>
        <img
          src={back}
          alt="back button"
          className={css.back}
          onClick={() => {
            navigate(`/mailbox/${id}`, { state: true });
          }}
        />
      </div>
      {data?.result.map((list: MailBox) => {
        return (
          <button
            key={list.id}
            onClick={() => {
              navigate(`/mail/${list.id}`);
            }}
          >
            From. {list.username}
          </button>
        );
      })}
      <div className={css.pageNationBox}>
        {pageArr.map((num: number, index: number) => {
          return (
            <button
              key={num + index}
              onClick={() => {
                setSkip(index * 5);
              }}
            >
              {num + index}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ListBox;
