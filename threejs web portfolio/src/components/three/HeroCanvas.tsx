import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  // Create particles
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  const color1 = new THREE.Color('#2196f3');
  const color2 = new THREE.Color('#00bcd4');
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = 10 + Math.random() * 5;
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(360);
    
    positions[i3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i3 + 2] = radius * Math.cos(theta);
    
    const mixedColor = color1.clone().lerp(color2, Math.random());
    
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={1.0} floatIntensity={1.0}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#2196f3"
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh position={position}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#00bcd4"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });
  
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshStandardMaterial
          color="#673ab7"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Canvas className="canvas-container">
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={60} />
      
      {/* Scene lighting */}
      <color attach="background" args={[theme === 'dark' ? '#060921' : '#e0f7fa']} />
      <fog attach="fog" args={[theme === 'dark' ? '#060921' : '#e0f7fa', 15, 30]} />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#00bcd4" />
      
      {/* 3D objects */}
      <ParticleField />
      <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />
      
      <FloatingCube position={[-3, 2, 0]} />
      <FloatingSphere position={[3, -2, 1]} />
      <FloatingTorus position={[2, 3, -1]} />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default HeroCanvas;