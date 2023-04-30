import './css/App.css';
import './css/calendar.css';
import './css/modal.css';
import MonthView from './components/MonthView';
import {events} from './eventsData';

function App() {
    const today = new Date();
    const currentMonth = today.getMonth(); // returns the zero-based index of the current month
    const currentYear = today.getFullYear(); // returns the current year as a four-digit number

    return (
        <div className='App'>
            <MonthView
                month={currentMonth}
                year={currentYear}
                events={events}
            />
        </div>
    );
}

export default App;
