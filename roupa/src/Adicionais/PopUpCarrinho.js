import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="alert alert-success d-flex align-items-center">
        <span className="flex-grow-1">{message}</span>
        <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
    </div>
  );
};

export default Popup;