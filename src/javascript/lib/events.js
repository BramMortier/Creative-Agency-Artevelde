// ---------------------------------------- //
// module imports
import { openMenuBtn, closeMenuBtn, flyoutMenu } from "./constants";
// ---------------------------------------- //

openMenuBtn.addEventListener("click", () => {
    flyoutMenu.classList.remove("menu--hidden");
});

closeMenuBtn.addEventListener("click", () => {
    flyoutMenu.classList.add("menu--hidden");
});
