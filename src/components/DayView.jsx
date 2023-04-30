import React, {useState} from 'react';
import Modal from './Modal';
import {config} from '../config';
import labelMapping from '../labels/config';
import {compareDates} from '../utils/compareDates';

const DayView = (props) => {
    const {date, children, addEvent} = props;
    let dayViewClass = 'day-view';
    if (compareDates(new Date(), date)) {
        dayViewClass += ' today';
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(false);
    };

    const handleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // handle save logic
        setIsModalOpen(false);
    };

    return (
        <div
            className={dayViewClass}
            data-testid='day-view'
            onClick={handleModalOpen}
        >
            <h4>
                {`${date.toLocaleString(config.locale, {
                    // weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                })}`}
            </h4>
            <div className='day-of-week'>
                {`${new Date(date).toLocaleString(config.locale, {
                    weekday: 'long',
                })}`}
            </div>
            <div className='events'>
                {children}
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onSave={handleSave}
                    title={labelMapping.addEvent}
                    addEvent={addEvent}
                    date={date}
                />
            </div>
        </div>
    );
};

export default DayView;
