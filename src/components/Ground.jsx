import { usePlane } from "@react-three/cannon";

//Importar la terxtura
import { groundTexture } from "../images/textures";
export function  Ground () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // Ejes 3D ( x, z, y)
    position: [0, -.5, 0] // Ejes 3D ( x, z, y)
  }))

  groundTexture.repeat.set(100, 100)

  return(
    <mesh ref={ref}>

      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      {/* Con map se mapea la textura */}
      <meshStandardMaterial attach='material' map={groundTexture} />

    </mesh>
  )
}

