import React, {Suspense} from 'react';
import "./style.css";
import {Canvas} from '@react-three/fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import { Ground } from './Ground';

function CarShow(){
  return (
    <>
      <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>

      <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}/>  
      {/* <ambientLight intensity={3} color="white" /> */}
      <color attach="background" args={[0,0,0]} />
      <spotLight 
        color={[0.5,  0.25, 0.7]}
        intensity={150}
        angle={10}
        penumbra={0.5}
        position={[5,5,0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight 
        color={[0.14,0.5,0.1]}
        intensity={200}
        angle={0.6}
        penumbra={1}
        position={[-5,5,0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
    </>
  );
}

function App() {
  return(
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  )
}
export default App;
