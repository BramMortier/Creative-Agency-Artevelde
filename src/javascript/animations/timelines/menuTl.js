// ---------------------------------------- //
// module imports
import gsap from "gsap";
import { menuBackground, menuImgCover, menuImgLink, menuNavLinkNrs, menuNavLinkText } from "../../lib/constants";
import { Power2 } from "gsap";
import { staggeredLettersSlideUp, textSlideInLeft } from "../lib/textAnimations";
import SplitType from "split-type";
import { imgRevealDown, instantAppear } from "../lib/imageAnimations";
// ---------------------------------------- //

export const openMenu = () => {
    let menuTl = gsap.timeline();

    menuTl.add(backgroundReveal());
    menuTl.add(textSlideInLeft(menuNavLinkNrs), "-=0.4");
    menuNavLinkText.forEach((link, index) => {
        menuTl.add(staggeredLettersSlideUp(new SplitType(link).chars), `-=${1.25 - index / 5}`);
    });
    menuTl.add(instantAppear(menuImgLink), "-=1.5");
    menuTl.add(imgRevealDown(menuImgCover), "-=1.5");
};

export const closeMenu = () => {
    let menuTl = gsap.timeline();

    menuTl.add(backgroundFadeOut());

    menuTl.set(menuBackground, { y: "-100%", opacity: 1 });
};

export const backgroundReveal = () => {
    return gsap.to(menuBackground, {
        y: "100%",
        duration: 0.8,
        ease: Power2.easeIn,
    });
};

export const backgroundFadeOut = () => {
    return gsap.to(menuBackground, {
        opacity: 0,
        duration: 0.8,
    });
};
