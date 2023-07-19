import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from 'styles/utils';

import Modal from 'components/Modal/Modal';
import PointText from 'components/PointText/PointText';
import { useCreateMailBoxMutation } from 'services/queries/letter.query';
import css from './Home.module.scss';

const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentMailBoxInfo, setCurrentMailBoxInfo] = useState({
    id: 0,
    placement: '',
    uuid: '',
  });

  const navigate = useNavigate();
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

  return (
    <main className={cn('container', css.container)}>
      <h2 className={css.mainTitle}>
        당신의 <PointText type="box" />을 둘 위치를 정해주세요
      </h2>
      <div className={css.listBox}>
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
      <div></div>
      {isModalOpened && (
        <Modal
          confirmAction={() => navigate(`/mailbox/${currentMailBoxInfo.uuid}`)}
          cancleAction={() => setIsModalOpened(prev => !prev)}
        >
          <span className={css.description}>
            소중함을 {currentMailBoxInfo.placement}에 올려놨어요 <br />
            소중함으로 이동할까요?
          </span>
        </Modal>
      )}
    </main>
  );
};

export default Home;

const MAILBOX_PLACEMENT_LIST = [
  { id: 1, placement: '책상' },
  { id: 2, placement: '침대' },
  { id: 3, placement: '서랍' },
  { id: 4, placement: '옷장' },
];
