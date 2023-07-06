// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const hourElement = document.getElementById('hour');
const minutesElement = document.getElementById('minutes');
const weekElement = document.getElementById('week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const hourLineElement = document.getElementById('line-hour');
const minutesLineElement = document.getElementById('line-minute');
const secondsLineElement = document.getElementById('line-second');
let daysWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
//const newTime = number => (number < 10 ? '0' + number : number);
setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  hourElement.textContent = date.getHours();
  weekElement.textContent = daysWeek[date.getDay()];
  dayElement.textContent = date.getDate();
  monthElement.textContent = months[date.getMonth()];
  yearElement.textContent = date.getFullYear();

  const newTime = number => {
    if (number < 10) {
      minutesElement.textContent = '0' + minutes;
    } else {
      minutesElement.textContent = minutes;
    }
    newTime();
  };

  const secondsDeg = seconds * 6;
  secondsLineElement.style.transform = `rotate(${secondsDeg}deg)`;
  const minutesDeg = minutes * 6 + seconds / 10;
  minutesLineElement.style.transform = `rotate(${minutesDeg}deg)`;
  const hoursDeg = hours * 30 + minutes / 2;
  hourLineElement.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);
