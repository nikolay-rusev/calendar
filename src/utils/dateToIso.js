export function dateToIso(date) {
    var tzoffset = new Date(date).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(date - tzoffset).toISOString().slice(0, -1);

    return localISOTime.slice(0, 10);
}
