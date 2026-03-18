import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { SceneCanvas } from './SceneCanvas';

function GlobePoints() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create a dotted sphere
  const count = 12000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const radius = 2.5;
      pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function LocationMarker() {
  const markerRef = useRef<THREE.Group>(null);
  
  // Ranchi, India coordinates
  // Lat: 23.3441, Lon: 85.3096
  const lat = 23.3441 * (Math.PI / 180);
  const lon = 85.3096 * (Math.PI / 180);
  const radius = 2.52;
  
  const x = radius * Math.cos(lat) * Math.cos(lon);
  const y = radius * Math.sin(lat);
  const z = radius * Math.cos(lat) * Math.sin(lon);

  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={markerRef}>
      <mesh position={[x, y, z]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#ff4d00" />
      </mesh>
      {/* Glow effect for marker */}
      <mesh position={[x, y, z]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#ff4d00" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export function EarthGlobe() {
  return (
    <div className="w-full h-[700px] relative bg-bg-dark">
      <div className="absolute top-0 left-0 w-full z-30 text-center pt-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-medium text-white mb-4 tracking-tight"
        >
          Based in Software Technology Parks of India (STPI), Ranchi
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="w-2.5 h-2.5 bg-[#00ff00] rounded-full shadow-[0_0_15px_#00ff00] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-white/50 font-bold">
            Available Worldwide
          </span>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-dark to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent" />
      </div>

      <div className="w-full h-full">
        <SceneCanvas>
          <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={35} />
          <ambientLight intensity={0.5} />
          <group position={[0, -2.5, 0]} rotation={[0.2, 0, 0]}>
            <GlobePoints />
            <LocationMarker />
            {/* Structural wireframe */}
            <mesh>
              <sphereGeometry args={[2.5, 48, 48]} />
              <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
            </mesh>
          </group>
        </SceneCanvas>
      </div>
    </div>
  );
}
