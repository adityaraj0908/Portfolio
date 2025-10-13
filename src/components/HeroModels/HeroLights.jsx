// import { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { useThree } from "@react-three/fiber";

// const HeroLights = () => {
//   const { scene } = useThree();
//   const lampLight = useRef();
//   const target = useRef();

//   useEffect(() => {
//     // Link the spotlight target
//     if (lampLight.current && target.current) {
//       lampLight.current.target = target.current;
//       scene.add(target.current);
//     }
//   }, [scene]);

//   return (
//     <>
//       {/* ✅ DESK LAMP SPOTLIGHT */}
//       <spotLight
//         ref={lampLight}
//         position={[0.3, 3.3, 2.5]} // moved slightly forward and lower
//         angle={0.4}
//         penumbra={0.8}
//         distance={10}
//         intensity={65}
//         color="#fff8e7"
//         castShadow
//       />
//       {/* Target: where the lamp light should hit (keyboard area) */}
//       <object3D ref={target} position={[0.8, 2.3, 2.0]} />

//       {/* Cool blue overhead ambient */}
//       <spotLight
//         position={[3.5, 5.2, 4]}
//         angle={0.35}
//         penumbra={0.5}
//         intensity={40}
//         color="#4cc9f0"
//       />

//       {/* Purple side fill */}
//       <spotLight
//         position={[-3, 5, 5]}
//         angle={0.45}
//         penumbra={1}
//         intensity={60}
//         color="#9d4edd"
//       />

//       {/* Soft area fill */}
//       <primitive
//         object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
//         position={[1, 3, 4]}
//         rotation={[-Math.PI / 4, Math.PI / 4, 0]}
//         intensity={10}
//       />

//       {/* Subtle ambient */}
//       <pointLight position={[0, 1, 0]} intensity={8} color="#7209b7" />
//       <pointLight position={[1, 2, -2]} intensity={8} color="#0d00a4" />
//     </>
//   );
// };

// export default HeroLights;


import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* ✅ Lamp light – adjusted to be by the lamp head */}
    <spotLight
      position={[3, 4, -1]}   // near the lamp head
      angle={0.35}
      penumbra={0.5}
      intensity={70}
      color="white"
      target-position={[0, 2.5, 2]} // aiming toward desk
      castShadow
    />

    {/* Slight warm bounce fill for desk */}
    <pointLight
      position={[1, , 2.5]}
      intensity={10}
      color="#ffd6a5"
    />

    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#4cc9f0"
    />

    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#9d4edd"
    />

    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />

    {/* subtle ambient accents */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
  </>
);

export default HeroLights;
