import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 200 }) => {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;     // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2; // z
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.3} sizeAttenuation={true} />
    </points>
  );
};

const FlowerPetals = ({ count = 30 }) => {
  const groupRef = useRef();

  const petals = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        Math.random() * 20 - 10,
        (Math.random() - 0.5) * 8 - 2
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      scale: Math.random() * 0.15 + 0.05,
      speed: Math.random() * 0.02 + 0.01,
      rxSpeed: (Math.random() - 0.5) * 0.03,
      rySpeed: (Math.random() - 0.5) * 0.03,
    }));
  }, [count]);

  // Create a simple petal geometry using a scaled sphere or plane
  const petalGeometry = new THREE.PlaneGeometry(1, 1.5);
  // Soft pink color for cherry blossoms
  const petalMaterial = new THREE.MeshBasicMaterial({ 
    color: "#FEC3E1", 
    transparent: true, 
    opacity: 0.9, 
    side: THREE.DoubleSide 
  });

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const data = petals[i];
      // Petals fall down
      child.position.y -= data.speed;
      child.position.x += Math.sin(child.position.y * 2) * 0.01;
      
      // Reset if they fall below view
      if (child.position.y < -10) {
        child.position.y = 10;
        child.position.x = (Math.random() - 0.5) * 15;
      }
      
      // Rotate as they fall
      child.rotation.x += data.rxSpeed;
      child.rotation.y += data.rySpeed;
    });
  });

  return (
    <group ref={groupRef}>
      {petals.map((petal, i) => (
        <mesh 
          key={i} 
          position={petal.position} 
          rotation={petal.rotation} 
          scale={petal.scale}
          geometry={petalGeometry}
          material={petalMaterial}
        />
      ))}
    </group>
  );
};

const FloatingAtmosphere = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-100">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true, antialias: false }}>
        <fog attach="fog" args={['#F5EBDD', 5, 15]} />
        <ParticleField count={150} />
        <FlowerPetals count={40} />
      </Canvas>
    </div>
  );
};

export default FloatingAtmosphere;

