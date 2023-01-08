// ---------------------------------------- //
// module imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { textFadeIn } from "../lib/textAnimations";
import { imgRevealDown } from "../lib/imageAnimations";
import { LineRevealToRight } from "../lib/specialAnimations";
import {
    introTitle,
    introSubTitle,
    introContainer,
    introImages,
    introFootnoteLeft,
    introFootnoteRight,
    introFootnoteDivider,
} from "../../lib/constants";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

if (introContainer) {
    let introTl = gsap.timeline({
        scrollTrigger: {
            trigger: introContainer,
        },
    });

    introTl.add(textFadeIn([introTitle, introSubTitle]));
    introTl.add(imgRevealDown(introImages), "0.5");
    introTl.add(textFadeIn(introFootnoteLeft), "1");
    introTl.add(LineRevealToRight(introFootnoteDivider), "1");
    introTl.add(textFadeIn(introFootnoteRight), "1.2");
}
