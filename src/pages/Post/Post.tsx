import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from 'styles/utils';

import Button from 'components/Button/Button';
import PointText from 'components/PointText/PointText';
import { useGetUser } from 'services/queries/letter.query';
import CreateMail from './CreateMail/CreateMail';
import css from './Post.module.scss';

const Post = () => {
  const [isWritingMode, setIsWritingMode] = useState(false);

  const { id } = useParams();
  const { data } = useGetUser(String(id));

  const changeMode = () => {
    setIsWritingMode(prev => !prev);
  };

  if (!data) return null;

  const { user_name, mailbox_name, address } = data.message;

  return (
    <main className={cn('container', css.container)}>
      {isWritingMode ? (
        <CreateMail
          recipient={user_name}
          address={address}
          changeMode={changeMode}
        />
      ) : (
        <>
          <h2 className={css.mainTitle}>
            {user_name}님의 <PointText type="box" />을 열었습니다!
          </h2>
          <div className={css.description}>
            {user_name}의 <strong>{mailbox_name}</strong>에 그동안 담아놓았던
            <br />
            <strong>마음</strong>을 담아주세요!
          </div>
          <Button title="소중함에 마음 담으러 가기" clickAction={changeMode} />
        </>
      )}
    </main>
  );
};

export default Post;
