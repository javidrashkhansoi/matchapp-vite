import "../src/scss/global.scss";
import "../src/scss/ui-kit/_find-people.scss";
import "./style.scss";
import { header } from "../src/header/index.js";

header("discover");

/** @type {HTMLButtonElement} */
const findFilterButton = document.querySelector(".filter-button");
/** @type {HTMLFormElement} */
const findFilter = document.querySelector(".find-form")

if (findFilterButton && findFilter) {
  findFilterButton.addEventListener("click", () => {
    findFilter.classList.add("find-form--show");
  });
}
