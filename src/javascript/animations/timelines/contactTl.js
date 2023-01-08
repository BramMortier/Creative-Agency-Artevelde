// ---------------------------------------- //
// module imports
import gsap from "gsap";
import { contactImages } from "../../lib/constants";
import { imgRevealDownWithTrigger } from "../lib/imageAnimations";
// ---------------------------------------- //

if (contactImages) {
    imgRevealDownWithTrigger(contactImages);
}
