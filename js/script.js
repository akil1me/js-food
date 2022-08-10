let elForm = document.querySelector(".hero__form");
let elInput = elForm.querySelector(".hero__input");
let elList = document.querySelector(".hero__list");

let arr = [];
console.log(arr);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elInput.value;
  let elListItem = document.createElement("li");
  arr.push(elInput.value);

  if (isNaN(inputValue)) {
    for (item of arr) {
      elList.appendChild(elListItem);
      elListItem.textContent = item;
    }
  } else {
    alert("Iltimos Son kiritmang");
  }
  elInput.value = "";

  elForm.addEventListener("reset", function (evt2) {
    evt2.preventDefault();

    elList.textContent = "";
    elListItem.textContent = "";
    elInput.value = "";
  })
})


