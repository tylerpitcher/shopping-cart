import { OrbitControls, Preload, Html, Center, useProgress, useGLTF } from '@react-three/drei';
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

function Model({ modelDetails }) {
  const model = useGLTF(modelDetails.file);

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
        object={model.scene.clone()}
        scale={modelDetails.scale}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
}

function ModelCanvas({ modelDetails }) {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<LoaderText/>}>
        <Center>
          <Model modelDetails={modelDetails}/>
        </Center>
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
