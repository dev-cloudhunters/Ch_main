import * as React from "react"
import { ModalStyles } from "./ModalStyles"

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <ModalStyles >
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
    </ModalStyles>
  );
};

export default Modal
