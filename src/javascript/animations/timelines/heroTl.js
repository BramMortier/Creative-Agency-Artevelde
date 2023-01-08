// ---------------------------------------- //
// module imports
import gsap from "gsap";
import { subHeroBg } from "../../lib/constants";
import { bgImgZoom } from "../lib/imageAnimations";
// ---------------------------------------- //

if (subHeroBg) {
    bgImgZoom(subHeroBg);
}
