// ---------------------------------------- //
// module imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

export const imgRevealDown = (target) => {
    return gsap.to(target, {
        scaleY: 0,
        transformOrigin: "center bottom",
        duration: 1.5,
        stagger: 0.15,
    });
};

export const imgRevealDownWithTrigger = (target) => {
    return gsap.to(target, {
        scrollTrigger: {
            trigger: target,
        },
        scaleY: 0,
        transformOrigin: "center bottom",
        duration: 1.5,
        stagger: 0.15,
    });
};

export const imgFadeUp = (target) => {
    return gsap.from(target, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: target,
    });
};

export const instantAppear = (target) => {
    return gsap.from(target, {
        duration: 0,
        opacity: 0,
    });
};

export const bgImgZoom = (target) => {
    return gsap.to(target, {
        backgroundSize: "+=25%, +=25%",
        duration: 1,
        ease: Power1.easeOut,
        scrollTrigger: {
            trigger: target,
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
    });
};
