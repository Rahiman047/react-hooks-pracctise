import React, { useEffect } from "react";

const Modal = ({ modalContext, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <div className="modal">
      <p>{modalContext}</p>
    </div>
  );
};

export default Modal;
