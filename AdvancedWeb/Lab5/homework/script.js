const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const toggleEl = document.createElement("button");
toggleEl.textContent = "Dark mode";
const clockContainerEl = document.createElement('div');
const clockEl = document.createElement('div');
const hourEl = document.createElement("div");
const minuteEl = document.createElement("div");
const secondEl = document.createElement("div");
const centerPointEl = document.createElement("div");
const timeEl = document.createElement("div");
const dateEl = document.createElement("div");
const circleEl = document.createElement("span");

toggleEl.classList.add('toggle')
clockContainerEl.classList.add('clock-container');
clockEl.classList.add('clock');
hourEl.classList.add('needle', 'hour');
minuteEl.classList.add('needle', 'minute');
secondEl.classList.add('needle', 'second');
timeEl.classList.add('time');
dateEl.classList.add('date');
circleEl.classList.add('circle');
centerPointEl.classList.add('center-point');


toggleEl.addEventListener('click', function(){
    const html = document.querySelector("html");
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        toggleEl.value = "Dark mode"
    } else{
        html.classList.add('dark');
        toggleEl.value = "Light mode";
    }
})

function setTime() {
  // const now = new Date(2022,10,26, 10, 14, 15, 300);
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDay();
  const date = now.getDate();
  const hours = now.getHours();
  const hoursForClock = hours % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 1, 11, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.textContent = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  circleEl.textContent = `${date}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} `;
dateEl.append(circleEl);
}
clockEl.append(hourEl, minuteEl, secondEl, centerPointEl, timeEl, dateEl);
clockContainerEl.append(clockEl);
document.body.append(toggleEl);
document.body.append(clockContainerEl);

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (
    Number(((num - in_min) * (out_max - out_min)) / (in_max - in_min)) + out_min
  );
};

setTime();

setInterval(setTime, 1000);
