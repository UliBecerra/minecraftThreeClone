// * Este componente hace referencia la First Point View 

// * Facilita algo
import { PointerLockControls } from "@react-three/drei";

// * Es un Hook para sacer la camara y el elemento en el que se renderiza el Canvas
import { useThree } from "@react-three/fiber";

export function FPV () {
  const { camera, gl } = useThree()

  return(
    <PointerLockControls 
    args={[camera, gl.domElement]}
    />
  )
}

