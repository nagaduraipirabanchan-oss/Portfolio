"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere
} from "@react-three/drei";

import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {

  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {

    if (meshRef.current) {

      meshRef.current.rotation.x =
        clock.getElapsedTime() * 0.2;

      meshRef.current.rotation.y =
        clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float
      speed={3}
      rotationIntensity={2}
      floatIntensity={2}
    >

      <Sphere
        ref={meshRef}
        args={[1.8, 128, 128]}
        scale={1.5}
      >

        <MeshDistortMaterial
          color="#00f5ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />

      </Sphere>

    </Float>
  );
}

export default function ParticleScene() {

  return (
    <div className="absolute inset-0 -z-10">

      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[2, 2, 5]}
        />

        <AnimatedSphere />

      </Canvas>

    </div>
  );
}