import "./style.scss";
import { HeaderObservers } from "../js/header-observers.js";

const main = document.querySelector("main");
const inactiveLink = "\" href=\"#\"";
const activeLink = " nav-link--active\" href=\"\" aria-current=\"page\"";

/**
 * @param {"home" | "people" | "discover" | "profile"} page
 */
function header(page) {
  const header = `
<header class="header" id="header" data-header="header">
  <div class="header__wrapper" data-header="wrapper" data-fixed>
    <nav class="header__nav header-nav" aria-label="Main navigation">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a class="header-nav__link nav-link${page === "home" ? activeLink : inactiveLink}>
            <span class="nav-link__icon ibg">
              <img src="/matchapp-vite/images/icons/header/home${page === "home" ? "-active" : ""}.svg" alt="#">
            </span>
            <span class="nav-link__text">Home</span>
          </a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link nav-link${page === "people" ? activeLink : inactiveLink}>
            <span class="nav-link__icon ibg">
              <img src="/matchapp-vite/images/icons/header/people${page === "people" ? "-active" : ""}.svg" alt="#">
            </span>
            <span class="nav-link__text">My people</span>
          </a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link nav-link${page === "discover" ? activeLink : inactiveLink}>
            <span class="nav-link__icon ibg">
              <img src="/matchapp-vite/images/icons/header/discover${page === "discover" ? "-active" : ""}.svg" alt="#">
            </span>
            <span class="nav-link__text">Discover</span>
          </a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link nav-link${page === "profile" ? activeLink : inactiveLink}>
            <span class="nav-link__icon ibg">
              <img src="/matchapp-vite/images/icons/header/profile${page === "profile" ? "-active" : ""}.svg" alt="#">
            </span>
            <span class="nav-link__text">My profile</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
`;

  main.insertAdjacentHTML("beforebegin", header);
  const headerObservers = new HeaderObservers();
}

export { header };
