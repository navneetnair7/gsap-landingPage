import { gsap } from "gsap";

export const introAnimation = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();
  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        roundProps: "textContent",
        duration: 5,
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });
  return tl;
};

export const collapseWords = (loaderRef) => {
  const tl = gsap.timeline();
  tl.to(loaderRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 1,
    ease: "expo.inOut",
  });
  return tl;
};
