import React from 'react';

const Modal = ({ selectedImg }) => {

    return (
        <div className="backdrop">
        <img src="{ selectedImg }" alt="Preview" />
        </div>
    )
}

export default Modal;