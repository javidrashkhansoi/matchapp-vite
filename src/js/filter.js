/** @type {NodeListOf<HTMLElement>} */
const filterTriggers = document.querySelectorAll("[data-filter-trigger]");

filterTriggers.forEach(trigger => {
  const { dataset } = trigger;
  const { filterTrigger } = dataset;
  const filter = document.querySelector(`[data-filter="${filterTrigger}"]`);

  if (filter) {
    trigger.addEventListener("click", (event) => {
      /** @type {{target: HTMLElement}} */
      const { target } = event;

      if (!target.closest("button")) {
        filter.classList.add("filter--show");
      }
    });
  }
});
