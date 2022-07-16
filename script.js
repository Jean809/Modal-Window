"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

/*
addEventListener("click", function () {
  console.log(btnsOpenModal[0]);
  console.log(btnsOpenModal[1]);
  console.log(btnsOpenModal[2]);
}); */

function removeHidden(variable) {
  variable.classList.remove("hidden");
}

function addHidden(variable) {
  variable.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    removeHidden(modal);
    removeHidden(overlay);
  });
}

btnCloseModal.addEventListener("click", function () {
  addHidden(modal);
  addHidden(overlay);
});

overlay.addEventListener("click", function () {
  addHidden(modal);
  addHidden(overlay);
});
