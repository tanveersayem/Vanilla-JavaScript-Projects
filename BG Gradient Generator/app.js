const result = document.querySelector(".result");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#body");

//Event Listener

color1.addEventListener("input", setBgColor);
color2.addEventListener("input", setBgColor);

function setBgColor(e) {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  result.innerText = body.style.background;
}
