// PopupModal.js
import React from "react";
import Image from "next/image";
const PopupModal = ({ imageUrl, title, onClose }) => {
  return (
    <div className="modal-content">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <Image src={imageUrl} alt={title} />
    </div>
  );
};

export default PopupModal;
