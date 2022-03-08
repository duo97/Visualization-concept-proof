import React, { Fragment, useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { useFrame } from "react-three-fiber";
import { Html } from "@react-three/drei";
import Inputs from "./input";
const min_dis = Inputs["min_distance"];
const var_dis = Inputs["var_distance"];
const speed = Inputs["speed"];
const R = Inputs["root_radius"];

function getRadius(radius) {
  let res = Math.floor(Math.random() * 2);
  let ans;
  res === 0
    ? (ans =
        ((radius * min_dis + radius * Math.random() * var_dis) * radius) / R)
    : (ans =
        ((-radius * min_dis - radius * Math.random() * var_dis) * radius) / R);
  return ans;
}

const RecusiveSpinningOrb = ({ position, dimensions, color, song }) => {
  const axis = useRef(null);
  const speed_factor = Math.random() * 2;
  useFrame(() => {
    axis.current.rotation.z += speed * speed_factor;
  });
  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  const x = { ...position }[0];
  const y = { ...position }[1];
  const z = { ...position }[2];
  const radius = { ...dimensions }[0] * 0.5;

  if (song.children === []) {
    return (
      <Fragment>
        <a.mesh
          onClick={() => setExpand(!expand)}
          position={position}
          scale={props.scale}
          ref={axis}
        >
          <sphereGeometry attach="geometry" args={dimensions} />
          {/* <meshStandardMaterial
          attach="material"
          color={color}
          metalness={0.1}
          roughness={0}
        /> */}
          <meshNormalMaterial attach="material" metalness={1} />
          {/* <meshStandardMaterial roughness={0} emissive="#404057" /> */}
          {/* <Html distanceFactor={10}>
          <div class="content">{song.name}</div>
        </Html> */}
        </a.mesh>
      </Fragment>
    );
  } else {
    return (
      <a.mesh
        onClick={() => setExpand(!expand)}
        position={position}
        scale={props.scale}
        ref={axis}
      >
        <torusGeometry attach="geometry" args={[10, 2, 16, 32]} />
        <sphereGeometry attach="geometry" args={dimensions} />
        <meshStandardMaterial
          attach="material"
          roughness={0}
          emissive="#404057"
        />
        {/* <meshStandardMaterial
          attach="material"
          color={color}
          metalness={0.1}
          roughness={0}
        /> */}
        <meshNormalMaterial attach="material" />
        {/* <Html distanceFactor={10}>
          <div class="content">{song.name}</div>
        </Html> */}

        {song.children.map((child) => {
          // const plane = useRef(null);
          // plane.current.rotation.y = 90;
          let r_1 = getRadius(radius);
          let r_2 = getRadius(radius);
          return (
            <>
              <mesh>
                <torusGeometry
                  attach="geometry"
                  args={[Math.sqrt(r_1 * r_1 + r_2 * r_2), 0.4, 32, 32]}
                />
              </mesh>
              <RecusiveSpinningOrb
                position={[r_1, r_2, z]}
                dimensions={[radius * 1.4, 32, 32]}
                color={color}
                song={child}
              />
            </>
          );
        })}
      </a.mesh>
    );
  }
};
export default RecusiveSpinningOrb;
