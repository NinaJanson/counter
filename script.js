const button = document.querySelector("button");
const main = document.querySelector("main");
const counter = document.querySelector(".counter");
let number = 0;

function result() {
  counter.innerText = number;
  main.style.backgroundSize = number + "% 100%";
}

function addCount() {
  if (number < 100) {
    number++;
    result();
  } else {
    number = 0;
    result();
  }
}

main.addEventListener("click", addCount);

document.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "Enter") {
    addCount();
  }
});

button.addEventListener("click", function () {
  number = 0;
  result();
  button.blur();
});
