import {isValidDate} from './isValidDate';

function compareDates(date1, date2) {
    if (!isValidDate(date1)) return false;
    if (!isValidDate(date2)) return false;
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

export {compareDates};
