import { useEffect, useState } from "react";

/* const ACTIONS_KEYBOARD_MAP = {
  'KeyW': 'moveForward',
  'KeyS': 'moveBAckward',
  'KeyA': 'moveLeft',
  'KeyD': 'moveRight',
  'Space': 'jump',
  'Dig1': 'dirt', 
  'Dig1': 'grass', 
  'Dig1': 'glass', 
  'Dig1': 'wood', 
  'Dig1': 'log', 
} */

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  Dig1: "dirt",
  Dig1: "grass",
  Dig1: "glass",
  Dig1: "wood",
  Dig1: "log",
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });
 
  useEffect(() => {
    const handleKeyDown = event => {
      const {code} = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if(action){
        setActions(prevActions => (
          {
            ...prevActions, 
            [action]: true
          }
        ))
      }
     //console.log(code)
     }
     const handleKeyUp = event => {
      const {code} = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if(action){
        setActions(prevActions => (
          {
            ...prevActions, 
            [action]: false
          }
        ))
      }
    // console.log(code)
     }
    //Codigo para escuchar cuando una tecla es presionada y aactivar una funion
   document.addEventListener('keydown', handleKeyDown)
   document.addEventListener('keyup', handleKeyUp)


    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    } 
  },[])
  return actions
};
/* 









const ACTIONS_KEYBOARD_MAP = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log'
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false
  })

  useEffect(() => {
    const handleKeyDown = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if (action) {
        // if (actions[action]) return

        setActions(prevActions => ({
          ...prevActions,
          [action]: true
        }))
      }
    }

    const handleKeyUp = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if (action) {
        // if (!actions[action]) return

        setActions(prevActions => ({
          ...prevActions,
          [action]: false
        }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actions
} */
