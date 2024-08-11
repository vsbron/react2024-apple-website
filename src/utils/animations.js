import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Helper function to short the gsap function call
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: () => (window.innerWidth < 768 ? "top 110%" : "top 85%"), // Adjust for mobile
      ...scrollProps,
    },
  });
};

// Helper function to short the gsap function call and add timeline animation
export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

// Helper function for video animation to play each time you scroll to it
export const animateWithGsapVideo = (target, ref) => {
  gsap.to(target, {
    scrollTrigger: {
      trigger: target,
      start: "top center",
      end: "bottom top",
      onEnter: () => ref.current.play(), // Play when the video enters the viewport
      onLeave: () => ref.current.pause(), // Pause when the video leaves the viewport
      onEnterBack: () => ref.current.play(), // Resume playing when scrolling back up
      onLeaveBack: () => ref.current.pause(), // Pause when scrolling back out
    },
  });
};
