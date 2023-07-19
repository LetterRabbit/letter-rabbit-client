import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import PointText from 'components/PointText/PointText';
import back from '../../assets/back.svg';
import ListBox from './ListBox/ListBox';
import MailBox from './MailBox/MailBox';
import css from './MailList.module.scss';

const MailList = () => {
  const [isOpenMailBox, setIsOpenMailBox] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state === null) return;
    setIsOpenMailBox(location.state);
  }, [location]);

  const handleBackButton = () => {
    setIsOpenMailBox(prev => !prev);
    searchParams.delete('skip');
    searchParams.delete('limit');
    setSearchParams(searchParams);
  };

  const handleOpenBox = () => {
    setIsOpenMailBox(prev => !prev);
    searchParams.set('skip', '0');
    searchParams.set('limit', '5');
    setSearchParams(searchParams);
  };

  return (
    <section className={css.container}>
      {!isOpenMailBox && (
        <img
          src={back}
          alt="back"
          className={css.backBtn}
          onClick={handleBackButton}
        />
      )}
      {isOpenMailBox ? (
        <h2 className={css.mainTitle}>
          당신의 <PointText type="box" />이 열렸어요!
        </h2>
      ) : (
        <h2 className={css.mainTitle}>
          당신에게 온 <PointText type="letter" />
          이에요!
        </h2>
      )}
      {isOpenMailBox ? <MailBox handleOpenBox={handleOpenBox} /> : <ListBox />}
    </section>
  );
};

export default MailList;
