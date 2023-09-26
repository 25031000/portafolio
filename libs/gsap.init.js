//greensock
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function initGSAP(params) {
    gsap.registerPlugin(ScrollTrigger);

    // Setup
    const scroller = document.querySelector('.scroller');

    const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, alwaysShowTracks: true });

    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });

    gsap.to('section.grey .text', {
        x: 0,
        scrollTrigger: {
          trigger: "section.grey",
          start: "-100px",
          end: () => "+=" + innerHeight,
          pin: true,
          scrub: true,
        }
      });
}