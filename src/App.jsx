import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground.jsx'
 import { FPV as Fpv } from './components/FPV.jsx'
 import { Player } from './components/Player.jsx'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TextureSelect.jsx'
/*import { TextureSelector } from './components/TextureSelect.jsx' */

function App () {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[50, 60, 20]} />
        <ambientLight intensity={0.5} />
         <Fpv /> 
{/*  
* # Lo que se coloque en Physics le sera afectado la fisica
*/}
        <Physics>
          <Cubes /> 
         
          <Player />  
          <Ground />
        </Physics>
      </Canvas>
     <div className='pointer'>+</div> 
   {/*    <TextureSelector /> */}
   <TextureSelector/>

    </>
  )
}

export default App