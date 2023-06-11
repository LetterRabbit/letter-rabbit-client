import React, { useState } from 'react';
import { api } from 'lib/api';
import { cn } from 'styles/utils';

interface Props {
  className?: string;
}

const ShareButton = (props: Props) => {
  const { className = '' } = props;
  const [qrCode, setQrCode] = useState({
    self_domain: '',
    qr_domain: '',
  });
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setIsModalOpened(prev => !prev);
  };

  const onClickQrGenBtn = async (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const { data, status } = await api.get(`/users/qr`);

    if (status !== 201) {
      return alert('QR코드 생성에 실패했습니다. 다시 한번 시도해주세요');
    }

    toggleModal(event);
    setQrCode(data);
  };

  const onClickClipboard = async () => {
    await navigator.clipboard.writeText(qrCode.self_domain);
    // TODO: alert 말고 Toast UI 작성하기
    alert('클립보드에 복사되었습니다.');
  };

  return (
    <div>
      <button className={cn('primary', className)} onClick={onClickQrGenBtn}>
        소중함 링크 공유하기
      </button>

      <dialog open={isModalOpened}>
        <article>
          <a aria-label="Close" className="close" onClick={toggleModal}></a>
          <h1>QR 코드~~</h1>
          <img src={qrCode.qr_domain} alt="QR 코드" />
          <button className="primary" onClick={onClickClipboard}>
            링크 복사하기
          </button>
          <footer>
            <a href="#confirm" role="button" onClick={toggleModal}>
              넹~ 🙋🏻‍♂️
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
};

export default ShareButton;
