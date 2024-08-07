import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import * as THREE from "three";

import ModelView from "./ModelView";
import { yellowImg } from "../utils";

function Model() {
  // Setting the state for the model &  size
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // Refs for cameras for various model sizes
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Models
  const large = useRef(new THREE.Group());
  const small = useRef(new THREE.Group());

  // Rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  // Setting animtions
  useGSAP(() => {
    // Animation for heading
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);

  // Returned JSX
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
