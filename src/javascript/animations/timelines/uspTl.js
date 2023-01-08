// ---------------------------------------- //
// module imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { imgFadeUp } from "../lib/imageAnimations";
import { quote, uspGallery, uspGalleryItems } from "../../lib/constants";
import SplitType from "split-type";
import { textFadeInWithTrigger } from "../lib/textAnimations";
import { stickyAnimation } from "../lib/specialAnimations";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

if (uspGallery) {
    uspGalleryItems.forEach((item) => {
        imgFadeUp(item);
    });

    const quoteLines = new SplitType(quote).lines;
    textFadeInWithTrigger(quoteLines);

    stickyAnimation(quote, uspGallery);
}
