import React from 'react';

const DayView = (props) => {
    const {date, children} = props;
    return (
        <div className='day-view'>
            <h2>{`${date.toLocaleString('default', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
            })}`}</h2>
            <div className='day-of-week'>{`${new Date(date).toLocaleString(
                'default',
                {weekday: 'long'},
            )}`}</div>
            <div className='events'>{children}</div>
        </div>
    );
};

export default DayView;
