// ---------------------------------------- //
// module imports
import gsap from "gsap";
// ---------------------------------------- //

// Fade in
export const textFadeIn = (target) => {
    return gsap.from(target, {
        opacity: 0,
        duration: 1,
        stagger: 0.25,
    });
};
