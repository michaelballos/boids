import React, { useRef } from 'react';
import {
  Canvas, 
  useFrame,
} from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

function Boid() {
  const ref = useRef<any>([0, 0, 0]);
  useFrame(() => {
    const { current } = ref;
    const position = current.position;
    const rotation = current.rotation;
    position.x = Math.sin(Date.now() * 0.0001) * 5;
    position.z = Math.sin(Date.now() * 0.0005) * 2;
    position.y = Math.sin(Date.now() * 0.0005) * 2;
    rotation.y += .02;
    rotation.x += .02;
  });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <Canvas
      style={{
        backgroundColor: 'white'
      }}
    >
      <Physics>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={.1} />
        <pointLight position={[0, 2, 4]} />
        <Boid />
        </Physics>
    </Canvas>
  )
}
