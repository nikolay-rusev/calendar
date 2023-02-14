import React from 'react';

const EventView = (props) => {
    // Use props to get data for the event view
    const {event} = props;

    return (
        <div className='event-view'>
            <h2>{event.title}</h2>
            <div className='event-time'>{event.time}</div>
            <div className='event-description'>{event.description}</div>
        </div>
    );
};

export default EventView;
