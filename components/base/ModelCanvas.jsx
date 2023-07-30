import { OrbitControls, Preload, Html, Center, useProgress, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import useScreenStore from '@/stores/screenStore';

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
  const { mobile } = useScreenStore();

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
        scale={mobile ? modelDetails.scale * 0.8 : modelDetails.scale}
        position-y={0}
        rotation-y={modelDetails.rotation || 0}
      />
    </mesh>
  );
}

function ModelCanvas({ autoRotate = true, modelDetails }) {
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
          autoRotate={autoRotate}
          enablePan={false}
        />
      </Suspense>
      <Preload all/>
    </Canvas>
  );
}

export default ModelCanvas;
