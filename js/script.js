let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".secounds");
let countDownEnd = new Date("Jun 6, 2022 07:30:00").getTime();

let countDown = setInterval(() => {
  // time now
  let dateNow= new Date().getTime();
  // the remaining time
  let dateRema = countDownEnd - dateNow ;
  // time units
  let day = Math.floor(dateRema / (1000 * 60 * 60 * 24));
  let hou = Math.floor(dateRema % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let min = Math.floor(dateRema % (1000 * 60 * 60) / (1000 * 60));
  let sec = Math.floor(dateRema % (1000 * 60) / (1000));
  days.textContent = day < 100 ? `0${day}`: day < 10 ? `00${day}` : day;
  hours.textContent = hou < 10 ? `0${hou}`: hou;
  minutes.textContent = min < 10 ? `0${min}`: min;
  seconds.textContent =  sec < 10 ? `0${sec}`: sec;
  // stop count down
  if (dateRema <= 0) {
    days.textContent = 00;
    hours.textContent = 00;
    minutes.textContent = 00;
    seconds.textContent =  00;
    clearInterval(countDown);
  }
}, 1000);
