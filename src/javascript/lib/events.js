// ---------------------------------------- //
// module imports
import { openMenuBtn, closeMenuBtn, flyoutMenu } from "./constants";
import { closeMenu, openMenu } from "../animations/timelines/menuTl";
// ---------------------------------------- //

if (openMenuBtn) {
    openMenuBtn.addEventListener("click", () => {
        openMenu();
        flyoutMenu.classList.add("menu--active");
    });

    closeMenuBtn.addEventListener("click", () => {
        closeMenu();
        flyoutMenu.classList.remove("menu--active");
    });
}
