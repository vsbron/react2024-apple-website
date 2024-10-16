import { useGSAP } from "@gsap/react";

import { rightImg, watchImg } from "../utils";
import { animateWithGsap } from "../utils/animations";

import VideoCarousel from "./VideoCarousel";

function Highlights() {
  useGSAP(() => {
    // Animation for title text
    animateWithGsap("#title", { opacity: 1, y: 0 });

    // Animation for links text
    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
    });
  }, []);

  // Returned JSX
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film <img src={watchImg} alt="Watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event{" "}
              <img src={rightImg} alt="Watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;
