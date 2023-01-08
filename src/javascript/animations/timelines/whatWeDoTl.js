// ---------------------------------------- //
// module imports
import gsap from "gsap";
import { whatWeDoImages, whatWeDoParagraph } from "../../lib/constants";
import { imgRevealDownWithTrigger } from "../lib/imageAnimations";
import { textSlideInUp } from "../lib/textAnimations";
import ScrollTrigger from "gsap/ScrollTrigger";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

if (whatWeDoParagraph) {
    textSlideInUp(whatWeDoParagraph);
    imgRevealDownWithTrigger(whatWeDoImages);
}
