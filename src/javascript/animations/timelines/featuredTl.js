// ---------------------------------------- //
// module imports
import gsap from "gsap";
import SplitType from "split-type";
import { featuredQuote } from "../../lib/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textLinesSlideInUp } from "../lib/textAnimations";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

let quoteLines = new SplitType(featuredQuote).lines;
textLinesSlideInUp(quoteLines);
