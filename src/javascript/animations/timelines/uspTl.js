// ---------------------------------------- //
// module imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { quote, uspGallery } from "../../lib/constants";
import { stickyAnimation } from "../lib/specialAnimations";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

let uspTl = gsap.timeline();

// uspTl.add(stickyAnimation(quote, uspGallery));
