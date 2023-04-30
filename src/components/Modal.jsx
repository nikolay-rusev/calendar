import React from 'react';
import labelMapping from '../labels/config';
const Modal = (props) => {
    const {isOpen, onClose, onSave, title} = props;

    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <div className='modal-header'>
                    <h3>{title}</h3>
                    <button className='close-btn' onClick={onClose}>
                        X
                    </button>
                </div>
                <div className='modal-body'>
                    <label>
                        {labelMapping.modalTime}:
                        <input type='time' name='time' />
                    </label>
                    <label>
                        {labelMapping.modalEventName}:
                        <input type='text' name='text' />
                    </label>
                </div>
                <div className='modal-footer'>
                    <button className='cancel-btn' onClick={onClose}>
                        {labelMapping.cancel}
                    </button>
                    <button className='save-btn' onClick={onSave}>
                        {labelMapping.save}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
