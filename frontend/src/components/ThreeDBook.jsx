import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Environment, Text, useTexture } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const BookModel = ({ title, author, isHovered, coverImage, backCoverImage }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!isHovered) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Load textures if URLs are provided
  const frontTexture = coverImage ? useTexture(coverImage) : null;
  const backTexture = backCoverImage ? useTexture(backCoverImage) : null;
  
  if (frontTexture) frontTexture.colorSpace = THREE.SRGBColorSpace;
  if (backTexture) backTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <group ref={meshRef}>
      {/* Book Cover (Front) */}
      <mesh position={[0, 0, 0.1]} castShadow>
        <boxGeometry args={[3, 4.5, 0.05]} />
        <meshStandardMaterial 
          color={coverImage ? "#ffffff" : "#FFCBCB"} 
          map={frontTexture}
        />
      </mesh>
      
      {/* Pages */}
      <mesh position={[0.05, 0, 0]} castShadow>
        <boxGeometry args={[2.8, 4.4, 0.2]} />
        <meshStandardMaterial color="#FDFBF7" />
      </mesh>
      
      {/* Back Cover */}
      <mesh position={[0, 0, -0.1]} castShadow>
        <boxGeometry args={[3, 4.5, 0.05]} />
        <meshStandardMaterial 
          color={backCoverImage ? "#ffffff" : "#2A3636"} 
          map={backTexture}
        />
      </mesh>

      {/* Title Text (only if no cover image) */}
      {!coverImage && (
        <>
          <Text
            position={[0, 0.5, 0.13]}
            fontSize={0.25}
            color="#D4AF37"
            font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
            maxWidth={2.5}
            textAlign="center"
          >
            {title}
          </Text>
          <Text
            position={[0, -1, 0.13]}
            fontSize={0.15}
            color="#FDFBF7"
            maxWidth={2.5}
            textAlign="center"
          >
            {author}
          </Text>
        </>
      )}
    </group>
  );
};

const ThreeDBook = ({ title = "You're My Favourite Memory", author = "Mehak Sethi", coverImage, backCoverImage }) => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.1, 0.1]}
          azimuth={[-0.8, 0.8]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Suspense fallback={null}>
            <BookModel title={title} author={author} coverImage={coverImage} backCoverImage={backCoverImage} />
          </Suspense>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeDBook;
