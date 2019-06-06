const body = document.body;
const html = document.documentElement;

const height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);
const clockwiseGears = document.querySelectorAll(".clockwise");
const counterClockwiseGears = document.querySelectorAll(".counterclockwise");

document.addEventListener("scroll", () => {
  clockwiseGears.forEach(gear => {
    gear.setAttribute("transform", `rotate(${window.scrollY}deg)`);
  });
  counterClockwiseGears.forEach(gear => {
    gear.setAttribute("transform", `rotate(-${window.scrollY}deg)`);
  });
});
