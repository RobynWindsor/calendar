'use strict';
const datetxtElement = document.querySelector('.datetxt');
const datesElement = document.querySelector('.dates');
const btnElement = document.querySelectorAll('.calendar_headings .fa-solid');
const monthYearElement = document.querySelector('.month_year');
let dmObj = {
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],

  months: [
    'Januray',
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
    'December',
  ],
};

// date object
let dateObj = new Date();

let dayName = dmObj.days[dateObj.getDay()];
let month = dateObj.getMonth();
let year = dateObj.getFullYear();
let date = dateObj.getDate();

// console.log(dayName, month, year, date);

// todays date
datetxtElement.innerHTML = `${dayName}, ${date}, ${dmObj.months[month]}, ${year}`;

const displayCalendar = () => {
  let lastDateofMonth = new Date(year, month + 1, 0).getDate();
  let days = '';
  for (let i = 1; i <= lastDateofMonth; i++) {
    days += `<li>${i}</li>`;
  }
  //   display all days inside the html
  datesElement.innerHTML = days;

  //   display current month and year
  monthYearElement.innerHTML = `${dmObj.months[month]}, ${year}`;
};
displayCalendar();
