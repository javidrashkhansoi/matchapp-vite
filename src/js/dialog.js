/** @type {NodeListOf<HTMLElement>} */
const dialogTriggers = document.querySelectorAll("[data-dialog-trigger]");

dialogTriggers.forEach(trigger => {
  const { dataset } = trigger;
  const { dialogTrigger } = dataset;
  /** @type {HTMLElement} */
  const dialog = document.querySelector(`[data-dialog="${dialogTrigger}"]`);

  if (dialog) {
    trigger.addEventListener("click", (event) => {
      dialog.classList.add("dialog--show");
    });

    dialog.addEventListener("click", (event) => {
      /** @type {{target: HTMLElement}} */
      const { target } = event;

      if (target.closest(".dialog__close") || !target.closest(".dialog__inner")) dialog.classList.remove("dialog--show");
    });
  }
});
