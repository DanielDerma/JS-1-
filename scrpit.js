const aprox = document.querySelector(".console"); // aprox
const score = document.querySelector(".score"); // score actual
const hightScore = document.querySelector(".hightScore"); // storang de hight's score.
const subInput = document.querySelectorAll("input")[0]; // sumbit button
const numInput = document.querySelectorAll("input")[1]; // numbers SELECT..

var random = Math.floor(Math.random() * (20 - 1) + 1);
var guess = 0;
var check = false;
var scoreNum = 20;
var almacen = [];
score.textContent = scoreNum;
console.log(random);
// intercion.
subInput.addEventListener("click", function () {
  if (guess >= 1 && !check) {
    if (guess === random) {
      aprox.textContent = "Gratula!!";
      check = true;
    } else if (guess < random) {
      aprox.textContent = "🙌to low";
      --scoreNum;
      score.textContent = scoreNum;
    } else {
      aprox.textContent = "🙌to hight";
      --scoreNum;
      score.textContent = scoreNum;
    }
  }
  if (check) {
    almacen.push(scoreNum);
    hightScore.textContent = Math.max.apply(null, almacen);
  }
});

numInput.addEventListener("change", function () {
  guess = parseInt(this.value);
});
