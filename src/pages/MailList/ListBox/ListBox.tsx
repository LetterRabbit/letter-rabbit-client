import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useOpenMailBox } from 'services/queries/letter.query';
import { MailBox } from 'services/types/letter';
import css from './ListBox.module.scss';

const ListBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.toString();
  const navigate = useNavigate();

  const { data, refetch } = useOpenMailBox(`?${query}`);
  const count = data?.total_count || 0;
  const pageArr = new Array(Math.ceil(count / 5)).fill(1);

  useEffect(() => {
    refetch();
  }, [query]);

  const handlePageBtn = (num: number) => {
    searchParams.set('skip', String(num));
    searchParams.set('limit', '5');
    setSearchParams(searchParams);
  };

  return (
    <div className={css.container}>
      {data?.result.map((list: MailBox) => {
        return (
          <button
            key={list.id}
            onClick={() => {
              navigate(`/mailbox/${list.id}`);
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
                handlePageBtn(index * 5);
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
