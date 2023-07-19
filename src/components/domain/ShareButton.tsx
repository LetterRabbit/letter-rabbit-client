import { useState } from 'react';
import { api } from 'lib/api';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import css from './ShareButton.module.scss';

const ShareButton = () => {
  const [qrCode, setQrCode] = useState({
    self_domain: '',
    qr_domain: '',
  });
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(prev => !prev);
    onClickQrGenBtn();
  };

  const onClickQrGenBtn = async () => {
    const { data, status } = await api.get(`/users/qr`);

    if (status !== 201) {
      return alert('QR코드 생성에 실패했습니다. 다시 한번 시도해주세요');
      setIsModalOpened(prev => !prev);
    }

    setQrCode(data);
  };

  const onClickClipboard = async () => {
    await navigator.clipboard.writeText(qrCode.self_domain);
    // TODO: alert 말고 Toast UI 작성하기
    alert('클립보드에 복사되었습니다.');
  };

  return (
    <div>
      <Button
        size="large"
        type="main"
        title="소중함 알려주기"
        clickAction={toggleModal}
      />

      {isModalOpened && (
        <Modal
          confirmAction={onClickClipboard}
          cancleAction={() => setIsModalOpened(prev => !prev)}
        >
          <span className={css.description}>
            소중함의 QR코드를 <br />
            복사할까요?
          </span>
          <img src={qrCode.qr_domain} alt="QR 코드" />
        </Modal>
      )}
    </div>
  );
};

export default ShareButton;
