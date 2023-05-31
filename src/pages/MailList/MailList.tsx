import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListBox from './ListBox/ListBox';
import MailBox from './MailBox/MailBox';
import css from './MailList.module.scss';

const MailList = () => {
  const [isOpenMailBox, setIsOpenMailBox] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMailBox(location.state);
  }, [location]);

  const handleOpenBox = () => {
    setIsOpenMailBox(prev => !prev);
  };

  return (
    <section className={css.container}>
      {isOpenMailBox ? <MailBox handleOpenBox={handleOpenBox} /> : <ListBox />}
    </section>
  );
};

export default MailList;
