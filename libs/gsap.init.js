//greensock
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function initGSAP(params) {
  gsap.registerPlugin(ScrollTrigger);

  // Setup
  const scroller = document.querySelector('.scroller');

  const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.03, delegateTo: document, alwaysShowTracks: true });

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

  gsap.to('.slider-cont .slider-img', {
    width: 0,
    scrollTrigger: {
      trigger: ".slider-cont",
      start: "-400px",
      end: () => "+=" + innerHeight,
    },
    duration: 2,
    ease: "sine.out"
  });

  gsap.to('.slider-cont2 .slider-img2', {
    width: 0,
    scrollTrigger: {
      trigger: ".slider-cont2",
      start: "-400px",
      end: () => "+=" + innerHeight,
    },
    duration: 2,
    ease: "sine.out"
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".circles-cont",
      start: "-150px",
      end: () => "+=" + innerHeight,

    },
    duration: 0.01,
    ease: "expo.out",
  })

  tl.to('.cir-one', { display: "block" })
  tl.to('.cir-two', { display: "block" })
  tl.to('.cir-three', { display: "block" })

  
}