import { useState } from 'react';

import ListBox from './ListBox/ListBox';
import MailBox from './MailBox/MailBox';
import css from './MailList.module.scss';

const MailList = () => {
  const [isOpenMailBox, setIsOpenMailBox] = useState(true);

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
