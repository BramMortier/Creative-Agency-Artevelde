// ---------------------------------------- //
// module imports
import gsap from "gsap";
// ---------------------------------------- //

// line reveal to right
export const LineRevealToRight = (target) => {
    return gsap.from(target, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
    });
};
