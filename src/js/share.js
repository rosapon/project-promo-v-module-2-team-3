"use strict";

const createBtn = document.querySelector(".js-create");
const created = document.querySelector(".js-click");
const tweet = document.querySelector(".created__btn");

console.log(tweet.href);

tweet.href = tweet.href + "Mira mi nueva tarjeta: URL de la card";
console.log(tweet.href);
function handleCreate(event) {
  event.preventDefault();
  createBtn.classList.add("share__grey");
  created.classList.remove("hidden");
}

createBtn.addEventListener("click", handleCreate);
