// ---------------------------------------- //
// module imports
import gsap from "gsap";
import SplitType from "split-type";
import { featuredBrandsSlider, featuredQuote } from "../../lib/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textLinesSlideInUp } from "../lib/textAnimations";
import { loopingBrands } from "../lib/specialAnimations";
// ---------------------------------------- //

gsap.registerPlugin(ScrollTrigger);

if (featuredQuote) {
    let quoteLines = new SplitType(featuredQuote).lines;
    textLinesSlideInUp(quoteLines);
    loopingBrands(featuredBrandsSlider);
}
