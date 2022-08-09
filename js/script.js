let elForm = document.querySelector(".hero__form");
let elInput = elForm.querySelector(".hero__input");
let elList = document.querySelector(".hero__list");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elInput.value;
  let elListItem = document.createElement("li");

  if (isNaN(inputValue)) {
    for (arr of inputValue) {
      let arr = [];
      elList.appendChild(elListItem);
      arr.push(elInput.value);
      elListItem.textContent = arr;
      break;
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


