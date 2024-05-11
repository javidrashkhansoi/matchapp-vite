import "../src/scss/global.scss";
import "../src/scss/ui-kit/_profile-create.scss";
import "./style.scss";

/** @type {NodeListOf<HTMLLabelElement>} */
const createDates = document.querySelectorAll(".create-date");

createDates.forEach(label => {
  const input = label.parentElement.querySelector("input");
  /** @type {HTMLSpanElement} */
  const text = label.querySelector(".create-date__text");

  if (input && text) {
    input.addEventListener("change", () => {
      const date = new Date(input.value);

      label.classList.add("create-date--selected");
      text.innerText = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    });
  }
});
