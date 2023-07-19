import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import { useOpenMailBox } from 'services/queries/letter.query';
import { MailBox } from 'services/types/letter';
import next from '../../../assets/next.svg';
import prev from '../../../assets/prev.svg';
import css from './ListBox.module.scss';

const ListBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [startNum, setStartNum] = useState(1);
  const [currentNum, setCurrentNum] = useState(1);

  const navigate = useNavigate();
  const skip = searchParams.get('skip');

  const { data, refetch } = useOpenMailBox(`?limit=5&skip=${skip}`);
  const count = data?.total_count || 0;

  useEffect(() => {
    refetch();
  }, [skip]);

  const maxNum = 5;
  const endNum = Math.ceil(count / maxNum);

  const pageArr: number[] = [];

  if (endNum - (startNum - 1 + maxNum) > 0) {
    for (let i = startNum; i <= startNum + maxNum - 1; i++) {
      pageArr.push(i);
    }
  } else {
    for (let i = startNum; i <= endNum; i++) {
      pageArr.push(i);
    }
  }

  const handlePageBtn = (number: number) => {
    searchParams.set('skip', String(number));
    searchParams.set('limit', '5');
    setCurrentNum(number / maxNum + 1);
    setSearchParams(searchParams);
  };

  const changePageButton = (type: string) => {
    if (type === 'prev') {
      if (startNum === 1) return alert('첫 페이지입니다!');
      setStartNum(prev => prev - maxNum);
      handlePageBtn((startNum - maxNum + 1) * maxNum);
    } else {
      if (pageArr.includes(endNum)) return alert('마지막 페이지입니다!');
      setStartNum(prev => prev + maxNum);
      handlePageBtn((startNum + maxNum - 1) * maxNum);
    }
  };

  return (
    <>
      <div className={css.container}>
        {data?.result.map((list: MailBox) => {
          return (
            <Button
              key={list.id}
              type="choice"
              title={`From. ${list.username}`}
              clickAction={() => navigate(`/mail/${list.id}`)}
            />
          );
        })}
      </div>
      <div className={css.pageNationBox}>
        <img
          className={css.pageMoveBtn}
          src={prev}
          alt="prev Button"
          onClick={() => changePageButton('prev')}
        />
        {pageArr.map((num: number) => {
          return (
            <Button
              key={num}
              size="small"
              type={currentNum === num ? 'number' : 'choice'}
              title={String(num)}
              clickAction={() => {
                handlePageBtn((num - 1) * maxNum);
              }}
            />
          );
        })}
        <img
          className={css.pageMoveBtn}
          src={next}
          alt="next Button"
          onClick={() => changePageButton('next')}
        />
      </div>
    </>
  );
};

export default ListBox;
