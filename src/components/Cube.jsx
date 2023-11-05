import { useBox } from '@react-three/cannon'
import *  as textures from '../images/textures'
import { useState } from 'react'
import { useStore } from '../hooks/useStore'

export const Cube = ({id, position, texture}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [removeCube] = useStore(state => [state.removeCube])
  const [ref] = useBox(() => ({
    type: 'Static',
     position,
  /*  texture,
    id */
  }))
const activeTexture = textures[texture + 'Texture']
  return (
    <mesh 
    onPointerMove={(e) => {
      e.stopPropagation();
      setIsHovered(true)
    }}
    onPointerOut={(e) => {
      e.stopPropagation();
      setIsHovered(false)
    }}
    
    onClick={(e) => {
      e.stopPropagation()
      if(e.altKey){
        /* const {x, y, z} = ref.current.position
        removeCube(x, y, z) */
        removeCube(id)
      }
    }}
    ref={ref}>

      <boxBufferGeometry attach='geometry' />

      <meshStandardMaterial /* color='red' */ map={activeTexture}  color={isHovered ? 'grey' : 'white'} 
    />

    </mesh>
  )
}