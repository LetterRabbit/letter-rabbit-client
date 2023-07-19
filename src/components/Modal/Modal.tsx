import { ReactNode } from 'react';

import Button from 'components/Button/Button';
import css from './Modal.module.scss';

interface Props {
  children: ReactNode;
  confirmAction: () => void;
  cancleAction: () => void;
}

const Modal = ({ confirmAction, cancleAction, children }: Props) => {
  return (
    <div className={css.backDimmed}>
      <div className={css.container}>
        {children}
        <div className={css.buttonWrap}>
          <Button
            size="medium"
            type="confirm"
            title="네"
            clickAction={confirmAction}
          />
          <Button
            size="medium"
            type="cancle"
            title="아니오"
            clickAction={cancleAction}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
