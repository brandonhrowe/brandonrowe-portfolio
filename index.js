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
const gearButton = document.querySelector("#gear-toggle");
const allGears = document.querySelectorAll(".gears");
const burger = document.querySelector("#burger");
const navDropdown = document.querySelector("#navbarDropdown");
const dropdowns = document.querySelectorAll(".dropdown");

document.addEventListener("scroll", () => {
  if (window.getComputedStyle(allGears[0]).display === "block") {
    clockwiseGears.forEach(gear => {
      gear.setAttribute("style", `transform: rotate(${window.scrollY / 5}deg)`);
    });
    counterClockwiseGears.forEach(gear => {
      gear.setAttribute(
        "style",
        `transform: rotate(-${window.scrollY / 5}deg)`
      );
    });
  }
});

gearButton.addEventListener("click", () => {
  if (window.getComputedStyle(allGears[0]).display === "block") {
    allGears.forEach(gears => {
      gears.setAttribute("style", "display: none");
    });
    gearButton.innerHTML =
      "<strong>Want To See The Gears Running This Site? Click Here!</strong>";
  } else {
    allGears.forEach(gears => {
      gears.setAttribute("style", "display: block");
    });
    gearButton.innerHTML =
      "<strong>Having Issues With This Page? Click to Turn Gears Off</strong>";
  }
});

burger.addEventListener("click", () => {
  if (burger.classList.contains("is-active")) {
    burger.classList.remove("is-active");
    navDropdown.classList.remove("is-active");
  } else {
    burger.classList.add("is-active");
    navDropdown.classList.add("is-active");
  }
});

navDropdown.addEventListener("click", () => {
  if (navDropdown.classList.contains("is-active")) {
    burger.classList.remove("is-active");
    navDropdown.classList.remove("is-active");
  }
});

dropdowns.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.classList.contains("is-active")) {
      cell.classList.remove("is-active");
    } else {
      cell.classList.add("is-active");
    }
  });
});
