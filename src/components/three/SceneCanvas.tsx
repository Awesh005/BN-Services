import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface SceneCanvasProps {
  children: React.ReactNode;
}

export function SceneCanvas({ children }: SceneCanvasProps) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        shadows={{ type: THREE.PCFShadowMap }}
        dpr={[1, 2]} // Performance optimization: limit pixel ratio
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white/20 text-[10px] uppercase tracking-widest">Initializing Neural Core...</div>}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[-10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          
          {children}
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
