import React from "react";
import NavBar from "../NavBar/NavBar";
import { ReactComponent as IconClose } from "../../assets/shared/icon-close.svg";
import { modalProps } from "../../types/type";

const Modal = ({ modal, handleClose, handleBackground }: modalProps) => {
  return (
    <div
      className={`modal__container ${
        modal == false ? "modal-close" : "modal-open"
      }`}
    >
      <div className="modal__content ternary">
        <IconClose onClick={handleClose} className="navbar__iconclose" />
        <NavBar handleBackground={handleBackground} />
      </div>
    </div>
  );
};

export default Modal;
