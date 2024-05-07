/** @type {NodeListOf<HTMLButtonElement>} */
const moreButtons = document.querySelectorAll(".more-button");

moreButtons.forEach(button => {
  const { dataset } = button;
  let { showText = "View more", hideText = "Hide info" } = dataset;
  /** @type {HTMLElement} */
  const hasMoreSection = button.closest(".has-more");
  /** @type {HTMLSpanElement} */
  const buttonText = button.querySelector(".more-button__text");

  if (hasMoreSection) {
    button.addEventListener("click", () => {
      hasMoreSection.classList.toggle("has-more--show");

      const isShow = hasMoreSection.classList.contains("has-more--show");

      if (buttonText) buttonText.innerText = isShow ? hideText : showText;
    });
  }
});
