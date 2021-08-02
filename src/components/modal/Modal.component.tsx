import { FC, useContext } from "react";
import userContext from "../../context/user/userContext";

import "./modal.style.scss";

export interface IModal {
  title: string;
  confirmText: string;
  canConfirm: boolean;
  onConfirm: () => void;
  canCancel: boolean;
  onCancel: () => void;
}

const Modal: FC<IModal> = ({
  title,
  confirmText,
  canConfirm,
  onConfirm,
  canCancel,
  onCancel,
  children,
}) => {
  const { user } = useContext(userContext);

  return (
    <div className="modal flex ai-c">
      <div className="modal__wrapper">
        <header className="modal__title">
          <h2 className=" fs-med fc-light">{title}</h2>
        </header>
        <section className="modal__content">{children}</section>
        <section className="modal__actions">
          {canConfirm && user && (
            <button
              className="btn-component btn-success fs-small fc-light"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          )}
          {canCancel && (
            <button
              className="btn-component btn-danger fs-small fc-light"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Modal;
