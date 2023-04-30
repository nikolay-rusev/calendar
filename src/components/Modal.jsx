import React, {useState} from 'react';
import labelMapping from '../labels/config';

const Modal = (props) => {
    const {isOpen, onClose, onSave, title} = props;

    // Define state variables
    const [eventStart, setEventStart] = useState('');
    const [eventTitle, setEventTitle] = useState('');

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
                        {labelMapping.eventHour}:
                        <input
                            type='time'
                            name='start'
                            value={eventStart}
                            onChange={(e) => setEventStart(e.target.value)}
                        />
                    </label>
                    <label>
                        {labelMapping.eventTitle}:
                        <input
                            type='text'
                            name='title'
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                        />
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
