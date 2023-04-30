import React from 'react';

const EventView = (props) => {
    // Use props to get data for the event view
    const {event} = props;

    return (
        <div className='event-view' event-id={event.id}>
            <h4>{event.title}</h4>
            <div className='event-time'>{event.start}</div>
            <div className='event-description'>{event.description}</div>
        </div>
    );
};

export default EventView;
