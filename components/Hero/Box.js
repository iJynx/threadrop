import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01, mesh.current.rotation.y += 0.01));
  // Return view, these are regular three.js elements expressed in JSX

  const loader = new GLTFLoader();

  loader.load(
    "https://cdn.glitch.com/e9b7e8e5-f8f4-4b2f-b8c8-f8f8f8f8f8f8/box.glb?v=1589788983244",
    (gltf) => {
      gltf.scene.scale.set(0.1, 0.1, 0.1);
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.rotation.set(0, 0, 0);
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(0xffffff);
          child.material.flatShading = true;
        }
      });
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(0xffffff);
          child.material.flatShading = true;
        }
      });
    }
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Shirt() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default Shirt;
