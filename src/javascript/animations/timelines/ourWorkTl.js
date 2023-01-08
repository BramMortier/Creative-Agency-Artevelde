// ---------------------------------------- //
// module imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ourWorkLower, ourWorkUpper } from "../../lib/constants";
import { textSlideInUp } from "../lib/textAnimations";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

if (ourWorkUpper) {
    textSlideInUp(ourWorkUpper);
    textSlideInUp(ourWorkLower);
}
