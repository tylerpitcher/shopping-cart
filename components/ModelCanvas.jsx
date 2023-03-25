import { OrbitControls, Preload, Html, useProgress, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function LoaderText() {
  const { progress } = useProgress();

  return (
    <Html>
      <span>{progress.toFixed(2)}%</span>
    </Html>
  );
}

function Model() {
  const model = useGLTF('/tank/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black'/>
      <spotLight
        position={[0, 300, 10]}
        penumbra={1}
        intensity={1}
      />
      <ambientLight intensity={1}/>
      <primitive
        object={model.scene}
        scale={1}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
}

function ModelCanvas({ details }) {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 1000, position: [500, 100, 0] }}
    >
      <Suspense fallback={<LoaderText/>}>
        <Model/>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all/>
    </Canvas>
  );
}

export default ModelCanvas;
