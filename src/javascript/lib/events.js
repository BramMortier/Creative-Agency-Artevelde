// ---------------------------------------- //
// module imports
import { openMenuBtn, closeMenuBtn, flyoutMenu } from "./constants";
// ---------------------------------------- //

if (closeMenuBtn) {
    openMenuBtn.addEventListener("click", () => {
        flyoutMenu.classList.remove("menu--hidden");
    });

    closeMenuBtn.addEventListener("click", () => {
        flyoutMenu.classList.add("menu--hidden");
    });
}
