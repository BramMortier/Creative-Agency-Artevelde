// ---------------------------------------- //
// module imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

// let introTimeline = gsap
//     .timeline({ scrollTrigger: ".intro" })
//     .from(".intro", {
//         opacity: 0,
//         duration: 1.5,
//     })
//     .from(".fade-in", {
//         stagger: 0.4,
//         opacity: 0,
//         duration: 2,
//     })
//     .from(".reveal-down", {
//         height: 0,
//         duration: 2,
//         stagger: 0.25,
//     })
//     .from(".intro__footnote-divider", {
//         scaleX: 0,
//         transformOrigin: "left center",
//         duration: 1,
//     });

// gsap.from(".intro", {
//     scrollTrigger: {
//         trigger: ".intro",
//     },
//     opacity: 0,
//     duration: 1.5,
// });

// gsap.from(".fade-in", {
//     scrollTrigger: {
//         trigger: ".fade-in",
//     },
//     stagger: 0.4,
//     opacity: 0,
//     duration: 2,
// });

// gsap.from(".reveal-down", {
//     scrollTrigger: {
//         trigger: ".reveal-down",
//     },
//     height: 0,
//     duration: 2,
//     stagger: 0.25,
// });

// gsap.from(".intro__footnote-divider", {
//     scrollTrigger: {
//         trigger: ".intro__footnote-divider",
//     },
//     scale: 0,
//     duration: 1,
// });
