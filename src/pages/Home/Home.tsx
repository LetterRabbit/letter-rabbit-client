import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from 'styles/utils';

import { useCreateMailBoxMutation } from 'services/queries/letter.query';
import css from './Home.module.scss';

const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentMailBoxInfo, setCurrentMailBoxInfo] = useState({
    id: 0,
    placement: '',
    uuid: '',
  });

  const { mutate } = useCreateMailBoxMutation();

  const onClickPlacement = (id: number, name: string) => () => {
    mutate(
      { mailbox_position_id: id, name },
      {
        onSuccess: uuid => {
          setIsModalOpened(true);
          setCurrentMailBoxInfo({ id, placement: name, uuid });
        },
      }
    );
  };

  const toggleModal = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setIsModalOpened(prev => !prev);
  };

  return (
    <main className={cn('container', css.container)}>
      <h1>당신의 소중함을 둘 위치를 지정해주세요!</h1>
      <div className="grid">
        {MAILBOX_PLACEMENT_LIST.map(({ id, placement }) => (
          <article
            key={id}
            onClick={onClickPlacement(id, placement)}
            className={css.touchableOpacity}
          >
            {placement}
          </article>
        ))}
      </div>

      <dialog open={isModalOpened}>
        <article>
          <a aria-label="Close" className="close" onClick={toggleModal}></a>
          <h1>소중함을 {currentMailBoxInfo.placement}에 올려놨어요</h1>
          <h2>소중함 공간으로 이동할까요?</h2>

          <footer>
            <button className="secondary" onClick={toggleModal}>
              노노 좀 이따요 🤷🏻‍♀️
            </button>
            <Link
              className="primary"
              to={`/mailbox/${currentMailBoxInfo.uuid}`}
            >
              넹~ 🙋🏻‍♂️
            </Link>
          </footer>
        </article>
      </dialog>
    </main>
  );
};

export default Home;

const MAILBOX_PLACEMENT_LIST = [
  { id: 1, placement: '책상 위' },
  { id: 2, placement: '침대 아래' },
  { id: 3, placement: '서랍' },
  { id: 4, placement: '옷장' },
];
