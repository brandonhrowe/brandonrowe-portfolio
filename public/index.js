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

document.addEventListener("scroll", () => {
  if (window.getComputedStyle(allGears[0]).display === 'block') {
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
  if (window.getComputedStyle(allGears[0]).display === 'block') {
    allGears.forEach(gears => {
      gears.setAttribute('style', 'display: none')
    })
    gearButton.innerHTML = "Want To See The Gears Running This Site? <strong>Click</strong> Here!"
  } else {
    allGears.forEach(gears => {
      gears.setAttribute('style', 'display: block')
    })
    gearButton.innerHTML = "Having Issues With This Page? <strong>Click</strong> to Turn Gears Off"

  }
});
