import { usePlane } from "@react-three/cannon";

//Importar la terxtura
import { groundTexture } from "../images/textures";
import { useStore } from "../hooks/useStore";
export function  Ground () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // Ejes 3D ( x, z, y)
    position: [0, -.5, 0] // Ejes 3D ( x, z, y)
  }))
  const [addCube] = useStore(state => [state.addCube])
  groundTexture.repeat.set(100, 100)
  const handleClickGround = event => {
    event.stopPropagation()
    const [x, y, z] = (Object.values(event.point))
    .map(n => Math.ceil(n))

    addCube(x,y,z)
  }
  return(
    <mesh 
    onClick={handleClickGround}
    ref={ref} >

      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      {/* Con map se mapea la textura */}
      <meshStandardMaterial attach='material' map={groundTexture} />

    </mesh>
  )
}

