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

setInterval(() => {
  const date = new Date();
  const seconds=date.getSeconds();
  hourElement.textContent = date.getHours();
  minutesElement.textContent = date.getMinutes();
  weekElement.textContent = daysWeek[date.getDay()];
  dayElement.textContent = date.getDate();
  monthElement.textContent = months[date.getMonth()];
  yearElement.textContent = date.getFullYear();
  const secondsDeg=
}, 1000);
