import "../src/scss/global.scss";
import "../src/scss/ui-kit/_profile.scss";
import "./style.scss";
import { header } from "../src/header/index.js";
import "../src/js/more.js";
import "../src/js/dialog.js";

header("profile");

/** @type {HTMLButtonElement} */
const supportSelectsButton = document.querySelector(".select-button");
/** @type {HTMLFieldSetElement} */
const supportSelects = document.querySelector(".dialog-selects");

if (supportSelectsButton && supportSelects) {
  /** @type {HTMLButtonElement} */
  const selectSaveButton = supportSelects.querySelector(".dialog-selects__button");
  /** @type {HTMLSpanElement} */
  const selectButtonText = supportSelectsButton.querySelector(".select-button__text");
  /** @type {NodeListOf<HTMLInputElement>} */
  const radios = supportSelects.querySelectorAll("input[type=\"radio\"]");

  supportSelectsButton.addEventListener("click", () => {
    supportSelects.classList.add("dialog-selects--show");
  });

  selectSaveButton?.addEventListener("click", () => {
    supportSelects.classList.remove("dialog-selects--show");

    if (selectButtonText && radios.length) {
      const [checkedRadio] = [...radios].filter(
        /** @param {HTMLInputElement} radio */
        radio => {
          return radio.checked;
        }
      );

      if (checkedRadio) {
        /** @type {HTMLSpanElement} */
        const checkedRadioText = checkedRadio.parentElement.querySelector(".radio__text");

        if (checkedRadioText) selectButtonText.innerText = checkedRadioText.innerHTML;

        supportSelectsButton.classList.add("select-button--selected");
      }
    }
  });
}
