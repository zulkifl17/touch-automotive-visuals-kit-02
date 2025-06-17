
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import { Group } from 'three';

const CarModel = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Simple car representation using basic shapes */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#056330" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Car roof */}
      <mesh position={[0, 1.2, 0]} scale={[0.8, 0.6, 0.9]}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#044028" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      {[-1.5, 1.5].map((x, i) => (
        <group key={i}>
          {[-0.8, 0.8].map((z, j) => (
            <mesh key={j} position={[x, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 0.3]} />
              <meshStandardMaterial color="#222" />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Headlights */}
      <mesh position={[2.1, 0.7, 0.6]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#88C43F" emissive="#88C43F" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[2.1, 0.7, -0.6]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#88C43F" emissive="#88C43F" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const Car3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`h-96 ${className}`}>
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <Stage environment="city" shadows={false}>
          <CarModel />
        </Stage>
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default Car3D;
