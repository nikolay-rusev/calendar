import React from 'react';
import {config} from '../config';

const DayView = (props) => {
    const {date, children} = props;
    const today = new Date().getDate();
    const dateDay = date.getDate();
    let dayViewClass = 'day-view';
    if (today === dateDay) {
        dayViewClass += ' today';
    }
    return (
        <div className={dayViewClass} data-testid='day-view'>
            <h3>{`${date.toLocaleString(config.locale, {
                // weekday: 'long',
                month: 'long',
                day: 'numeric',
            })}`}</h3>
            <div className='day-of-week'>{`${new Date(date).toLocaleString(
                config.locale,
                {weekday: 'long'},
            )}`}</div>
            <div className='events'>{children}</div>
        </div>
    );
};

export default DayView;
