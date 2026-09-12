import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Environment, useTexture, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const BookMesh = ({ frontCoverUrl, backCoverUrl }) => {
  const meshRef = useRef();
  const [frontTexture, backTexture] = useTexture([frontCoverUrl, backCoverUrl]);

  useEffect(() => {
    if (frontTexture) {
      frontTexture.colorSpace = THREE.SRGBColorSpace;
      frontTexture.generateMipmaps = true;
      frontTexture.minFilter = THREE.LinearMipmapLinearFilter;
      frontTexture.needsUpdate = true;
    }
    if (backTexture) {
      backTexture.colorSpace = THREE.SRGBColorSpace;
      backTexture.generateMipmaps = true;
      backTexture.minFilter = THREE.LinearMipmapLinearFilter;
      backTexture.wrapS = THREE.ClampToEdgeWrapping;
      backTexture.repeat.set(1, 1);
      backTexture.offset.set(0, 0);
      backTexture.center.set(0, 0);
      backTexture.rotation = 0;
      backTexture.needsUpdate = true;
    }
  }, [frontTexture, backTexture]);

  const width = 3;
  const height = 4.5;
  const thickness = 0.55;

  useFrame((state) => {
    if (state.clock.elapsedTime < 1.5) {
      const t = state.clock.elapsedTime / 1.5;
      const easeOutQuart = 1 - Math.pow(1 - t, 4);
      const scale = 0.8 + easeOutQuart * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={meshRef}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[width, height, thickness]} />
        <meshStandardMaterial attach="material-0" color="#FDFBF7" roughness={0.9} />
        <meshStandardMaterial attach="material-1" color="#1A1311" roughness={0.7} />
        <meshStandardMaterial attach="material-2" color="#FDFBF7" roughness={0.9} />
        <meshStandardMaterial attach="material-3" color="#FDFBF7" roughness={0.9} />
        <meshStandardMaterial attach="material-4" map={frontTexture} roughness={0.4} metalness={0.1} />
        <meshStandardMaterial attach="material-5" map={backTexture} roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
};

const InteractiveBook3D = ({ 
  frontCoverUrl = "/images/front-cover.jpeg", 
  backCoverUrl = "/images/back-cover.jpeg" 
}) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing rounded-2xl shadow-xl overflow-hidden" style={{ backgroundImage: "url('/images/floral_card_border.jpg')", backgroundSize: "cover", backgroundPosition: "center", border: "8px solid #FDFBF7" }}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 7.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.0} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.6} 
        />
        
        <PresentationControls
          global={false} 
          cursor={false}
          snap={false} 
          speed={1.5} 
          polar={[-0.2, 0.2]} 
          azimuth={[-Infinity, Infinity]} 
          config={{ mass: 1, tension: 170, friction: 26 }} 
          rotation={[0, -0.4, 0]} 
        >
          <React.Suspense fallback={null}>
            <BookMesh frontCoverUrl={frontCoverUrl} backCoverUrl={backCoverUrl} />
          </React.Suspense>
        </PresentationControls>

        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.3} 
          scale={10} 
          blur={2} 
          far={4.5} 
          color="#000000"
        />

        <Environment preset="city" />
      </Canvas>
      
      <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none opacity-40">
        <p className="text-[10px] uppercase tracking-widest text-[#3A241A] flex items-center justify-center gap-2 font-medium">
          <span>&larr;</span> Drag to Rotate <span>&rarr;</span>
        </p>
      </div>
    </div>
  );
};

export default InteractiveBook3D;



