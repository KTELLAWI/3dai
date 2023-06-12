import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Mug from './Mug';
import { useSnapshot } from 'valtio';
import state from '../store';
const CanvasModel = () => {
  const snap = useSnapshot(state);

  if (snap.twoModels){
    return (
      <div className="w-full max-w-full flex flex-col  h-full ansition-all ease-in">
      <div className="w-full max-w-full   h-1/2 ansition-all ease-in">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov:5 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
  
        <CameraRig model={true}>
          <Backdrop />
          <Center>
            {/* <Shirt /> */}
            <Mug/>
          </Center>
        </CameraRig>
      </Canvas>
  
      </div>
      <div className="w-full max-w-full   h-1/2 ansition-all ease-in "  >
      <Canvas
        shadows
        camera={{ position:[0, 0, 0], fov:25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in "
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
  
        <CameraRig model={false}>
          <Backdrop />
          <Center >
            <Shirt   />
            {/* <Mug/> */}
          </Center>
        </CameraRig>
      </Canvas>
  
      </div>
      </div>
      

    )
  }
  
  return(
    <Canvas
   
    shadows
    camera={{ position: [0, 0, 0], fov:snap.isTeaPot ? 5 : 25}}
    gl={{ preserveDrawingBuffer: true }}
    className="w-full max-w-full h-full transition-all ease-in"
  >
    <ambientLight intensity={0.5} />
    <Environment preset="city" />

    <CameraRig  model= {snap.isTeaPot ? true : false}>
      <Backdrop />
      <Center>
        {snap.isTeaPot ?
        
        <Mug/>
        :
        <Shirt/>
        }
      </Center>
    </CameraRig>
  </Canvas>

  )

 
   
  
}

export default CanvasModel