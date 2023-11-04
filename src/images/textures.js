// * Impotar la imagenes
import { grassImg, dirtImg, logImg, glassImg, woodImg } from "./images";


// Libreria para cargar textura ya que en react no se puede
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

// Creando textura

//const groundTexture = new TextureLoader().load(grassImg);
// Indicar que se repita de forma horizontal

/* groundTexture.wrapS = RepeatWrapping; // indica un eje (y)
groundTexture.wrapT = RepeatWrapping; //Indica un eje (x)
// Indicar el filtro al mostrar la imagen
groundTexture.magFilter = NearestFilter; // Intenta agrandar la imagen y mantener los pixeles mas sercanos multiplicandolos */

//const textureNames = [grassImg, dirtImg, logImg, glassImg, woodImg];


const loadTexture = (imgUrl) => {
  const texture = new TextureLoader().load(imgUrl);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = NearestFilter;
  return texture;
};


const groundTexture = loadTexture(grassImg);
const grassTexture = loadTexture(grassImg);
const dirtTexture = loadTexture(dirtImg);
const logTexture = loadTexture(logImg);
const glassTexture = loadTexture(glassImg);
const woodTexture = loadTexture(woodImg);
export {
  groundTexture,
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture,
}

//export { groundTexture };

/* import {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg
} from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)

const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

export {
  groundTexture,
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
}
 */
