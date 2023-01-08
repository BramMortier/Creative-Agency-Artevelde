// ---------------------------------------- //
// module imports
import gsap from "gsap";
import { Power0 } from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
// ---------------------------------------- //

gsap.registerPlugin(CSSPlugin);

// line reveal to right
export const LineRevealToRight = (target) => {
    return gsap.from(target, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
    });
};

export const stickyAnimation = (target, container) => {
    return gsap.to(target, {
        opacity: 1,
        scrollTrigger: {
            trigger: target.parentElement,
            start: "75% 100px",
            end: `+=${container.getBoundingClientRect().height - 850}`,
            pin: true,
        },
    });
};

export const loopingBrands = (target) => {
    return gsap.to(target, {
        translateX: "-=1000px",
        duration: 10,
        yoyo: true,
        repeat: -1,
        ease: Power0.easeNone,
    });
};
