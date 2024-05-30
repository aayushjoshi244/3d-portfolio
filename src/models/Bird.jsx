import {useRef, useEffect} from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const {actions} = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    },[]);

    useFrame((_, delta) => {
      // update the Y position simulate the flight moving in a sin wave
      birdRef.current.rotation.y = Math.sin(delta * 1.5) * 0.5;
    })


  return (
   <mesh position={[-5,2,1]} 
        scale={[0.003,0.003,0.003]}
        ref={birdRef}
    >
        <primitive object={scene}/>
   </mesh>
  )
}

export default Bird
