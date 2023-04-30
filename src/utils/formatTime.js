export function formatTime(inputTime) {
    const [hour, minute] = inputTime.split(':');

    const date = new Date();
    date.setHours(hour, minute);

    const outputTime = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    return outputTime;
}
