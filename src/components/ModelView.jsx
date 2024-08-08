import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";

import IPhone from "./IPhone";
import Lights from "./Lights";

function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) {
  //

  // Returned JSX
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2 && "right-[-100%]"}`}
    >
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />

      {/* Perspective Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Additional lights */}
      <Lights />

      {/* iPhone model under Suspense component */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}

export default ModelView;
