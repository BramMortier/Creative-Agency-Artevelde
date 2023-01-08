// ---------------------------------------- //
// module imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power2 } from "gsap";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

// Fade in
export const textFadeIn = (target) => {
    return gsap.from(target, {
        opacity: 0,
        duration: 1,
        stagger: 0.25,
    });
};

export const textFadeInWithTrigger = (target) => {
    return gsap.from(target, {
        scrollTrigger: {
            trigger: target,
            start: "top bottom",
        },
        delay: 0.25,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
    });
};

export const textSlideInLeft = (target) => {
    return gsap.from(target, {
        opacity: 0,
        x: "-100px",
        duration: 1,
        stagger: 0.25,
        ease: Power2.easeOut,
    });
};

export const staggeredLettersSlideUp = (target) => {
    return gsap.from(target, {
        opacity: 0,
        y: "100px",
        duration: 0.6,
        stagger: 0.1,
        ease: Power2.easeOut,
    });
};

export const textSlideInUp = (target) => {
    return gsap.from(target, {
        scrollTrigger: target,
        opacity: 0,
        y: "100px",
        duration: 0.8,
        ease: Power2.easeOut,
    });
};

export const textLinesSlideInUp = (target) => {
    return gsap.from(target, {
        scrollTrigger: {
            trigger: target,
        },
        opacity: 0,
        y: "100px",
        stagger: 0.25,
        duration: 0.8,
        ease: Power2.easeOut,
    });
};
