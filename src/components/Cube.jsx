import { useBox } from '@react-three/cannon'
import *  as textures from '../images/textures'

export const Cube = ({id, position, texture}) => {
  const [ref] = useBox(() => ({
    type: 'Static',
     position,
  /*  texture,
    id */
  }))
const activeTexture = textures[texture + 'Texture']
  return (
    <mesh ref={ref}>

      <boxBufferGeometry attach='geometry' />

      <meshStandardMaterial /* color='red' */ map={activeTexture} />

    </mesh>
  )
}