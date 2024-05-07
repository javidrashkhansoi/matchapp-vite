import "../src/scss/global.scss";
import "../src/scss/ui-kit/_profile-editing.scss";
import "./style.scss";
import "../src/js/filter.js";

/** @type {NodeListOf<HTMLLabelElement>} */
const editingDates = document.querySelectorAll(".editing-date");

editingDates.forEach(label => {
  const input = label.parentElement.querySelector("input");
  /** @type {HTMLSpanElement} */
  const text = label.querySelector(".editing-date__text");

  if (input && text) {
    input.addEventListener("change", () => {
      const date = new Date(input.value);

      text.innerText = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear().toString().substring(2)}`;
    });
  }
});

/** @type {NodeListOf<HTMLLabelElement>} */
const editingSelects = document.querySelectorAll(".editing-select");

editingSelects.forEach(label => {
  const select = label.parentElement.querySelector("select");
  /** @type {HTMLSpanElement} */
  const text = label.querySelector(".editing-select__text");

  if (select && text) {
    select.addEventListener("change", () => {
      text.innerText = select.selectedOptions[0].innerText;
    });
  }
});
