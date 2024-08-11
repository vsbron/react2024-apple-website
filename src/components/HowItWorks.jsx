import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { chipImg, frameImg, frameVideo } from "../utils";
import { animateWithGsap, animateWithGsapVideo } from "../utils/animations";

function HowItWorks() {
  // Creating the reference for the video element
  const videoRef = useRef();

  // Setting animations
  useGSAP(() => {
    // Taking over the video controls
    animateWithGsapVideo("#frameVideo", videoRef);

    // Animating the chip image
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: () => (window.innerWidth < 640 ? "top 95%" : "top 85%"), // Adjust for mobile
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  // Returned JSX
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Top image */}
        <div id="chip" className="flex-center w-full my-12 lg:my-20">
          <img src={chipImg} alt="Chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          {/* The title and text */}
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          {/* Video within the phone */}
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                id="frameVideo"
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex-1 flex justify-center flex-col order-none md:order-1 g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphics performance by far
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
