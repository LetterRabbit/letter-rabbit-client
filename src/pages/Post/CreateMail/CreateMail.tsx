import React, { useState } from 'react';

import Button from 'components/Button/Button';
import { useCreateMailMutation } from 'services/queries/letter.query';
import back from '../../../assets/back.svg';
import css from './CreateMail.module.scss';

interface Props {
  recipient: string;
  address: string;
  changeMode: () => void;
}

const CreateMail = ({ recipient, address, changeMode }: Props) => {
  const [mailInfo, setMailInfo] = useState({
    username: '',
    description: '',
  });

  const { username, description } = mailInfo;

  const handleMailInfo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMailInfo(prev => ({ ...prev, [name]: value }));
  };

  const { mutate } = useCreateMailMutation(address);

  const sendMail = () => {
    if (username === '' || description === '')
      return alert('빈 칸을 모두 입력해주세요!');
    mutate(mailInfo, {
      onSuccess: data => {
        if (data.message === 'new letter created') {
          alert(`${recipient}님께 마음이 잘 전달됐어요!`);
          changeMode();
        }
      },
    });
  };

  return (
    <>
      <img src={back} alt="back" className={css.backBtn} onClick={changeMode} />
      <div className={css.container}>
        <div className={css.mailBox}>
          <div className={css.recipient}>To. {recipient}</div>
          <textarea
            className={css.mail}
            name="description"
            value={description}
            placeholder="마음을 작성해주세요."
            onChange={handleMailInfo}
          />
          <input
            className={css.sender}
            type="text"
            name="username"
            value={username}
            placeholder="마음을 보내는 분의 별명을 입력해주세요"
            onChange={handleMailInfo}
          />
        </div>
        <Button title="마음 보내기" clickAction={sendMail} />
      </div>
    </>
  );
};

export default CreateMail;
