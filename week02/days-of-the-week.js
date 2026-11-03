const numberOfDays = 6;
const options = { weekday: 'long' };

const today = new Date();
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is <strong>${todaystring}</strong>!`;

let i = 1;
while (i <= numberOfDays) {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + i);

    let nextDayString = new Intl.DateTimeFormat('en-US', options).format(nextDay);
    const item = document.createElement('1i');
    item.textContent = nextDayString;
    document.querySelector('ul').appendChild(item);

    
    i++;
}