import React, {useState} from 'react';
import './css/App.css';
import './css/calendar.css';
import './css/modal.css';
import MonthView from './components/MonthView';
import {events as eventsData} from './eventsData';
import labelMapping from './labels/config';

function App() {
    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const handlePrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    return (
        <div className='App'>
            <div className='month-navigation'>
                <button onClick={handlePrevMonth}>{labelMapping.back}</button>
                <button onClick={handleNextMonth}>
                    {labelMapping.forward}
                </button>
            </div>
            <MonthView month={month} year={year} eventsData={eventsData} />
        </div>
    );
}

export default App;
