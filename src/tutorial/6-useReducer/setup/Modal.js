import React, { useEffect } from "react";

const Modal = ({ modalContext }) => {
  return (
    <div className="modal">
      <p>{modalContext}</p>
    </div>
  );
};

export default Modal;
