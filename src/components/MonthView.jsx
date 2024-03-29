import React, {useState} from 'react';
import DayView from './DayView';
import EventView from './EventView';

import labelMapping from '../labels/config';

import {compareDates} from '../utils/compareDates';

const MonthView = (props) => {
    const {month, year, eventsData} = props;
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = firstDayOfMonth.getDay();
    const emptyCells = Array.from({length: dayOfWeek - 1}, (_, i) => '');

    const [events, setEvents] = useState(eventsData);

    function addEvent(event) {
        setEvents([...events, event]);
    }

    function removeEvent(id) {
        const filteredEvents = events.filter((event) => event.id !== id);
        setEvents(filteredEvents);
    }

    const dates = [
        ...emptyCells,
        ...Array.from({length: daysInMonth}, (_, i) => i + 1),
    ];

    return (
        <div className='month-view'>
            <div className='days-of-week'>
                <div>{labelMapping.Monday}</div>
                <div>{labelMapping.Tuesday}</div>
                <div>{labelMapping.Wednesday}</div>
                <div>{labelMapping.Thursday}</div>
                <div>{labelMapping.Friday}</div>
                <div className='weekend-day'>{labelMapping.Saturday}</div>
                <div className='weekend-day'>{labelMapping.Sunday}</div>
            </div>
            <div className='days'>
                {dates.map((date, i) => {
                    if (date === '') {
                        return <div key={i} className='empty-cell' />;
                    }
                    const eventsOnDay = events.filter((event) => {
                        const eventDate = new Date(event.date);
                        const currentDate = new Date(year, month, date);
                        return compareDates(eventDate, currentDate);
                    });
                    return (
                        <DayView
                            key={i}
                            date={new Date(year, month, date)}
                            addEvent={addEvent}
                            removeEvent={removeEvent}
                        >
                            {eventsOnDay.map((event, j) => (
                                <EventView key={j} event={event} />
                            ))}
                        </DayView>
                    );
                })}
            </div>
        </div>
    );
};

export default MonthView;
