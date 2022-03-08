import "./App.scss";
import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import RecursiveSpinningOrb from "./components/Recurse";
import GenTree from "./data/genTree";
import Inputs from "./components/input";
const root = GenTree();

function Scene() {
  // console.log(R);
  const root_radius = Inputs["root_radius"];
  return (
    <>
      <Canvas
        colorManagement
        // camera={{ position: [-5, 2, 10], fov: 60 }}
        orthographic
        camera={{ zoom: 10, position: [0, 0, 500] }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />

        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        {/* <Spinningorb position={[2, 1, 0]} color="pink" content="More!" />
        <Spinningorb
          position={[8, 1, 0]}
          color="aqua"
          content={Songs[0].name}
        /> */}
        <Stars depth={3000} />

        {/* <mesh>
          <torusGeometry attach="geometry" args={[10, 1, 32, 32]} />
        </mesh> */}

        <RecursiveSpinningOrb
          position={[0, 0, 0]}
          color="aqua"
          song={root}
          dimensions={[root_radius, 32, 32]}
        />
        {/* <Terrain /> */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Scene;
