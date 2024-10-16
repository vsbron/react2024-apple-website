import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import { models, sizes } from "../constants";
import { ModelState } from "../lib/types";
import { yellowImg } from "../utils";
import { animateWithGsap, animateWithGsapTimeline } from "../utils/animations";

import ModelView from "./ModelView";

function Model() {
  // Setting the state for the model & size
  const [size, setSize] = useState<string>("small");
  const [model, setModel] = useState<ModelState>({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // Refs for cameras of various sizes
  const cameraControlSmall = useRef<THREE.PerspectiveCamera | null>();
  const cameraControlLarge = useRef<THREE.PerspectiveCamera | null>();

  // Three group for each size
  const smallGroup = useRef<THREE.Group>(new THREE.Group());
  const largeGroup = useRef<THREE.Group>(new THREE.Group());

  // Rotation of each size
  const [smallRotation, setSmallRotation] = useState<number>(0);
  const [largeRotation, setLargeRotation] = useState<number>(0);

  // Creating the GSAP timeline
  const tl = gsap.timeline();

  // useEffect for switching iPhone sizes
  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(
        tl,
        smallGroup,
        smallRotation,
        "#view1",
        "#view2",
        { transform: "translateX(-100%)", duration: 2 }
      );
    }
    if (size === "small") {
      animateWithGsapTimeline(
        tl,
        largeGroup,
        largeRotation,
        "#view2",
        "#view1",
        { transform: "translateX(0)", duration: 2 }
      );
    }
  }, [size]);

  // Setting animations
  useGSAP(() => {
    // Animation for heading
    animateWithGsap("#heading", { opacity: 1, y: 0 });
  }, []);

  // Returned JSX
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-screen h-[65vh] md:h-[80vh] overflow-hidden relative -mt-12 -mb-8 sm:-mt-8 sm:-mb-4">
            <ModelView
              index={1}
              groupRef={smallGroup}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={largeGroup}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{ position: "fixed", inset: "0", overflow: "hidden" }}
              eventSource={document.getElementById("root")!}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              {/* Model change buttons */}
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              {/* Size change buttons */}
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
