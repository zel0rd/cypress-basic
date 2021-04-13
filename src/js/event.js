let plusBtn = document.querySelector(".plus-button");
let minusBtn = document.querySelector(".minus-button");

plusBtn.addEventListener("click", function () {
  let val = document.querySelector(".count-display");
  if (val.value < 12) {
    val.value = val.value * 1 + 1;
  }
});

minusBtn.addEventListener("click", function () {
  let val = document.querySelector(".count-display");
  if (val.value > 8) {
    val.value = val.value * 1 - 1;
  }
});
