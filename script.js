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
    'December',
  ],
};

// date object
let dateObj = new Date();

let dayName = dmObj.days[dateObj.getDay()]; //day
let month = dateObj.getMonth(); // month
let year = dateObj.getFullYear(); // year
let date = dateObj.getDate(); // dates

// todays date
datetxtElement.innerHTML = `${dayName}, ${date}, ${dmObj.months[month]}, ${year}`;

const displayCalendar = () => {
  let firstDayofMonth = new Date(year, month, 1).getDay();
  let lastDateofMonth = new Date(year, month + 1, 0).getDate();
  let lastDayofMonth = new Date(year, month, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(year, month, 0).getDate();
  let days = '';

  //previous month last days
  for (let i = firstDayofMonth; i > 0; i--) {
    days += `<li class="dummy">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    let checkToday =
      i === dateObj.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? 'active'
        : '';
    days += `<li class="${checkToday}">${i}</li>`;
  }

  //next month first days
  for (let i = lastDayofMonth; i < 6; i++) {
    days += `<li class="dummy">${i - lastDayofMonth - i + 1}</li>`;
  }
  //   display all days inside the html
  datesElement.innerHTML = days;

  //   display current month and year
  monthYearElement.innerHTML = `${dmObj.months[month]}, ${year}`;
};
displayCalendar();

//previous and next month
btnElement.forEach((btns) => {
  btns.addEventListener('click', () => {
    month = btns.id === 'prev' ? month - 1 : month + 1;

    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }
    displayCalendar();
  });
});
