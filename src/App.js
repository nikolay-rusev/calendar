import './App.css';
import './calendar.css';
import MonthView1 from './components/MonthView';
import {events} from './eventsData';
function App() {
    return (
        <div className='App'>
            <MonthView1 month={1} year={2023} events={events} />
        </div>
    );
}

export default App;
