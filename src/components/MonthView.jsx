import React from 'react';
import DayView from './DayView';
import EventView from './EventView';
import {config} from '../config';
import {capitalizeFirstLetter} from '../utils';

const MonthView = (props) => {
    const {month, year, events} = props;
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = firstDayOfMonth.getDay();
    const emptyCells = Array.from({length: dayOfWeek - 1}, (_, i) => '');

    const dates = [
        ...emptyCells,
        ...Array.from({length: daysInMonth}, (_, i) => i + 1),
    ];

    return (
        <div className='month-view'>
            <h2>{`${capitalizeFirstLetter(
                firstDayOfMonth.toLocaleString(config.locale, {
                    month: 'long',
                }),
            )} ${year}`}</h2>
            <div className='days-of-week'>
                <div>Понеделник</div>
                <div>Вторник</div>
                <div>Сряда</div>
                <div>Четвъртък</div>
                <div>Петък</div>
                <div className='weekend-day'>Събота</div>
                <div className='weekend-day'>Неделя</div>
            </div>
            <div className='days'>
                {dates.map((date, i) => {
                    if (date === '') {
                        return <div key={i} className='empty-cell' />;
                    }
                    const eventsOnDay = events.filter(
                        (event) => event.date === date,
                    );
                    return (
                        <DayView key={i} date={new Date(year, month, date)}>
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
