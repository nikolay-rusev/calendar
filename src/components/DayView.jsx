import React, {useState} from 'react';
import Modal from './Modal';
import {config} from '../config';
import labelMapping from '../labels/config';

const DayView = (props) => {
    const {date, children} = props;
    const today = new Date().getDate();
    const dateDay = date.getDate();
    let dayViewClass = 'day-view';
    if (today === dateDay) {
        dayViewClass += ' today';
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSave = (e) => {
        // handle save logic
        setIsModalOpen(false);
    };

    return (
        <div className={dayViewClass} data-testid='day-view'>
            <h3>
                {`${date.toLocaleString(config.locale, {
                    // weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                })}`}
            </h3>
            <div className='day-of-week'>
                {`${new Date(date).toLocaleString(config.locale, {
                    weekday: 'long',
                })}`}
            </div>
            <div className='events'>
                {children}
                <button onClick={handleModalOpen}>
                    {labelMapping.addEvent}
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onSave={handleSave}
                    title={labelMapping.addEvent}
                />
            </div>
        </div>
    );
};

export default DayView;
