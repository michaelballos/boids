import React, { useRef } from 'react';
import {
  Canvas, 
  useFrame,
} from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function Boid() {
  const ref = useRef<any>();

  useFrame(() => {
    const boid = ref.current;
    boid.velocity.add(boid.acceleration);
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
      camera={{
        position: [0, 0, 1],
      }}
      style={{
        backgroundColor: 'black'
      }}
    >
      <OrbitControls />
      <Stars />
      <ambientLight intensity={.1} />
      <pointLight position={[0, 2, 4]} />
      <Boid />
    </Canvas>
  )
}
