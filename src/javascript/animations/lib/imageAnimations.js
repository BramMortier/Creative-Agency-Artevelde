// ---------------------------------------- //
// module imports
import gsap from "gsap";
// ---------------------------------------- //

// Reveal down
export const imgRevealDown = (target) => {
    return gsap.to(target, {
        scaleY: 0,
        transformOrigin: "center bottom",
        duration: 1.5,
        stagger: 0.15,
    });
};
