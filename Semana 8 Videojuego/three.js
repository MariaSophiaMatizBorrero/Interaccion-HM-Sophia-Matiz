import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const pointLight = new THREE.PointLight(0xFFA500 , 50, 1);
pointLight.position.set(0, 10, 0);
pointLight.castShadow = true;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xFF4500 , 50, 10);
pointLight2.position.set(0, 5.5, 0);
pointLight2.castShadow = true;
scene.add(pointLight2);

const pointLightboton1 = new THREE.PointLight(0x39FF14 , 0.5, 0.5);
pointLightboton1.position.set(7, 2.8, 0.3);
pointLightboton1.castShadow = true;
scene.add(pointLightboton1);

const pointLightboton2 = new THREE.PointLight(0x39FF14 , 0.5, 0.5);
pointLightboton2.position.set(-7, 2.8, 0.3);
pointLightboton2.castShadow = true;
scene.add(pointLightboton2);

const pointLightpuerta = new THREE.PointLight(0x00FFFF , 10, 40);
pointLightpuerta.position.set(9, 2.5, 0.2);
pointLightpuerta.castShadow = true;
scene.add(pointLightpuerta);


const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

const Loader = new THREE.TextureLoader();
const pisoTextura = Loader.load('/IMG/piso.png');
const paredTextura = Loader.load('/IMG/pared.png');
const paredaBlancaTextura = Loader.load('/IMG/paredblanca.png');
const paredDecoracionTextura = Loader.load('/IMG/decoracion.png');
const paredTriangulosTextura = Loader.load('/IMG/paredBconT.png');
const paredArribaTextura = Loader.load('/IMG/arriba.png');
const puertaTextura = Loader.load('/IMG/puerta.png');
const puertafondoTextura = Loader.load('/IMG/puertafondo.png');
const botonTextura = Loader.load('/IMG/boton.png');
const tvTextura = Loader.load('/IMG/tv.png');
const maderaTextura = Loader.load('/IMG/madera.png');
const hojaTextura = Loader.load('/IMG/hoja.png');
const documentoTextura = Loader.load('/IMG/documento.png');
const cartelTextura = Loader.load('/IMG/cartel.png');
const d1Textura = Loader.load('/IMG/d1.png');
const d2Textura = Loader.load('/IMG/d2.png');
const d3Textura = Loader.load('/IMG/d3.png');
const d4Textura = Loader.load('/IMG/d4.png');






paredTextura.wrapS = THREE.RepeatWrapping;
paredTextura.wrapT = THREE.RepeatWrapping;
paredTextura.repeat.set(2, 1);

// Piso
const piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 0.1, 12),
  new THREE.MeshStandardMaterial({ map: pisoTextura })
);
piso1.receiveShadow = true;
piso1.castShadow = true;
scene.add(piso1);

const piso2 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 0.1, 5),
  new THREE.MeshStandardMaterial({ map: pisoTextura })
);
piso2.receiveShadow = true;
piso2.castShadow = true;
piso2.position.set(0, 0, -8.5);
scene.add(piso2);


// PARED 1 (izquierda)
const pared1a = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 1.3, 4.5),
  new THREE.MeshStandardMaterial({ map: paredaBlancaTextura })
);
pared1a.receiveShadow = true;
pared1a.castShadow = true;
pared1a.position.set(-7.5, 0.6, -3.75);
scene.add(pared1a);

const pared1aa = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 1.3, 4),
  new THREE.MeshStandardMaterial({ map: paredaBlancaTextura })
);
pared1aa.receiveShadow = true;
pared1aa.castShadow = true;
pared1aa.position.set(-7.5, 0.6, 4);
scene.add(pared1aa);


const pared1b = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.8, 4.5),
  new THREE.MeshStandardMaterial({ map: paredDecoracionTextura })
);
pared1b.receiveShadow = true;
pared1b.castShadow = true;
pared1b.position.set(-7.5, 1.7, -3.75);
scene.add(pared1b);

const pared1bb = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.8, 4),
  new THREE.MeshStandardMaterial({ map: paredDecoracionTextura })
);
pared1bb.receiveShadow = true;
pared1bb.castShadow = true;
pared1bb.position.set(-7.5, 1.7, 4);
scene.add(pared1bb);


const pared1c = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 4.85, 12),
  new THREE.MeshStandardMaterial({ map: paredTriangulosTextura })
);
pared1c.receiveShadow = true;
pared1c.castShadow = true;
pared1c.position.set(-7.5, 4.55, 0);
scene.add(pared1c);




// PARED 2 (derecha) 
const pared2a = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 1.3, 4.5),
  new THREE.MeshStandardMaterial({ map: paredaBlancaTextura })
);
pared2a.receiveShadow = true;
pared2a.castShadow = true;
pared2a.position.set(7.5, 0.6, -3.75);
scene.add(pared2a);

const pared2aa = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 1.3, 4),
  new THREE.MeshStandardMaterial({ map: paredaBlancaTextura })
);
pared2aa.receiveShadow = true;
pared2aa.castShadow = true;
pared2aa.position.set(7.5, 0.6, 4);
scene.add(pared2aa);


const pared2b = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.8, 4.5),
  new THREE.MeshStandardMaterial({ map: paredDecoracionTextura })
);
pared2b.receiveShadow = true;
pared2b.castShadow = true;
pared2b.position.set(7.5, 1.7, -3.75);
scene.add(pared2b);

const pared2bb = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.8, 4),
  new THREE.MeshStandardMaterial({ map: paredDecoracionTextura })
);
pared2bb.receiveShadow = true;
pared2bb.castShadow = true;
pared2bb.position.set(7.5, 1.7, 4);
scene.add(pared2bb);


const pared2c = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 4.85, 12),
  new THREE.MeshStandardMaterial({ map: paredTriangulosTextura })
);
pared2c.receiveShadow = true;
pared2c.castShadow = true;
pared2c.position.set(7.5, 4.55, 0);
scene.add(pared2c);

// PARED 3 (fondo)

const pared3a = new THREE.Mesh(
  new THREE.BoxGeometry(4, 7, 5),
  new THREE.MeshStandardMaterial({ map: paredTriangulosTextura })
);
pared3a.receiveShadow = true;
pared3a.castShadow = true;
pared3a.position.set(5.5, 3.5, -8.35);
scene.add(pared3a);

const pared3b = new THREE.Mesh(
  new THREE.BoxGeometry(4, 7, 5),
  new THREE.MeshStandardMaterial({ map: paredTriangulosTextura })
);
pared3b.receiveShadow = true;
pared3b.castShadow = true;
pared3b.position.set(-5.5, 3.5, -8.35);
scene.add(pared3b);

const pared3c = new THREE.Mesh(
  new THREE.BoxGeometry(6.99, 2, 5),
  new THREE.MeshStandardMaterial({ map: paredArribaTextura })
);
pared3c.receiveShadow = true;
pared3c.castShadow = true;
pared3c.position.set(0, 6, -8.35);
scene.add(pared3c);


//decoracion puertas

//pared1 (izquierda)
const puerta1a = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 2.1, 0.3),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta1a.receiveShadow = true;
puerta1a.castShadow = true;
puerta1a.position.set(-7.4, 1.1, 2);
scene.add(puerta1a);

const puerta1b = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 2.1, 0.3),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta1b.receiveShadow = true;
puerta1b.castShadow = true;
puerta1b.position.set(-7.4, 1.1, -1.5);
scene.add(puerta1b);

const puerta1c = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.3, 3.5),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta1c.receiveShadow = true;
puerta1c.castShadow = true;
puerta1c.position.set(-7.4, 2, 0.3);
scene.add(puerta1c);

//boton
const boton1a = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 1, 1),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
boton1a.receiveShadow = true;
boton1a.castShadow = true;
boton1a.position.set(-7.4, 2.8, 0.3);
scene.add(boton1a);

const boton1b = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 0.8, 0.8),
  new THREE.MeshStandardMaterial({ map: botonTextura })
);
boton1b.receiveShadow = true;
boton1b.castShadow = true;
boton1b.position.set(-7.35, 2.8, 0.3);
scene.add(boton1b);


//pared3 (fondo)
const puerta2a = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 5, 0.1),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta2a.receiveShadow = true;
puerta2a.castShadow = true;
puerta2a.position.set(-3.4, 2.5, -5.8);
scene.add(puerta2a);

const puerta2b = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 5, 0.1),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta2b.receiveShadow = true;
puerta2b.castShadow = true;
puerta2b.position.set(3.4, 2.5, -5.8);
scene.add(puerta2b);

const puerta2c = new THREE.Mesh(
  new THREE.BoxGeometry(6.39, 0.3, 0.1),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta2c.receiveShadow = true;
puerta2c.castShadow = true;
puerta2c.position.set(0, 4.85, -5.8);
scene.add(puerta2c);

//pared2 (puerta)
const puerta3a = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 2.1, 0.3),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta3a.receiveShadow = true;
puerta3a.castShadow = true;
puerta3a.position.set(7.4, 1.1, 2);
scene.add(puerta3a);

const puerta3b = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 2.1, 0.3),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta3b.receiveShadow = true;
puerta3b.castShadow = true;
puerta3b.position.set(7.4, 1.1, -1.5);
scene.add(puerta3b);

const puerta3c = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.3, 3.5),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
puerta3c.receiveShadow = true;
puerta3c.castShadow = true;
puerta3c.position.set(7.4, 2, 0.3);
scene.add(puerta3c);


//boton
const boton2a = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 1, 1),
  new THREE.MeshStandardMaterial({ map: puertaTextura })
);
boton2a.receiveShadow = true;
boton2a.castShadow = true;
boton2a.position.set(7.4, 2.8, 0.3);
scene.add(boton2a);

const boton2b = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 0.8, 0.8),
  new THREE.MeshStandardMaterial({ map: botonTextura })
);
boton2b.receiveShadow = true;
boton2b.castShadow = true;
boton2b.position.set(7.35, 2.8, 0.3);
scene.add(boton2b);

//televisores 

const tv1 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv1.receiveShadow = true;
tv1.castShadow = true;
tv1.rotation.y = Math.PI / 7;
tv1.position.set(-6.5, 0.6, -4);
scene.add(tv1);

const tv2 = new THREE.Mesh(
  new THREE.BoxGeometry(2,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv2.receiveShadow = true;
tv2.castShadow = true;
tv2.rotation.y = Math.PI / 5;
tv2.position.set(-4.8, 0.6, -5);
scene.add(tv2);

const tv3 = new THREE.Mesh(
  new THREE.BoxGeometry(1.8,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv3.receiveShadow = true;
tv3.castShadow = true;
tv3.rotation.y = Math.PI /8;
tv3.position.set(-4.8, 1.5, -5);
scene.add(tv3);

const tv4 = new THREE.Mesh(
  new THREE.BoxGeometry(1.2,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv4.receiveShadow = true;
tv4.castShadow = true;
tv4.rotation.y = Math.PI /9;
tv4.position.set(-6.3, 1.5, -4.2);
scene.add(tv4);

const tv5 = new THREE.Mesh(
  new THREE.BoxGeometry(1.3,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv5.receiveShadow = true;
tv5.castShadow = true;
tv5.rotation.y = Math.PI /4;
tv5.position.set(-4.8, 2.5, -5);
scene.add(tv5);


const tv6 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv6.receiveShadow = true;
tv6.castShadow = true;
tv6.rotation.y = Math.PI / -7;
tv6.position.set(6.5, 0.6, -4);
scene.add(tv6);

const tv7 = new THREE.Mesh(
  new THREE.BoxGeometry(2,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv7.receiveShadow = true;
tv7.castShadow = true;
tv7.rotation.y = Math.PI / -5;
tv7.position.set(4.8, 0.6, -5);
scene.add(tv7);

const tv8 = new THREE.Mesh(
  new THREE.BoxGeometry(1.9,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv8.receiveShadow = true;
tv8.castShadow = true;
tv8.rotation.y = Math.PI /-9;
tv8.position.set(4.8, 1.5, -5);
scene.add(tv8);

const tv9 = new THREE.Mesh(
  new THREE.BoxGeometry(1.2,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv9.receiveShadow = true;
tv9.castShadow = true;
tv9.rotation.y = Math.PI /-2;
tv9.position.set(6.3, 1.5, -4.2);
scene.add(tv9);

const tv10 = new THREE.Mesh(
  new THREE.BoxGeometry(1.3,1,1),
  new THREE.MeshStandardMaterial({ map: tvTextura })
);
tv10.receiveShadow = true;
tv10.castShadow = true;
tv10.rotation.y = Math.PI /-4;
tv10.position.set(6.5, 2.5, -4.5);
scene.add(tv10);

//mesa
const mesa = new THREE.Mesh(
  new THREE.BoxGeometry(5,0.3,2),
  new THREE.MeshStandardMaterial({ map: maderaTextura })
);
mesa.receiveShadow = true;
mesa.castShadow = true;
mesa.position.set(0, 2, 3);
scene.add(mesa);

const p1mesa = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1, 0.1, 2, 32),
  new THREE.MeshStandardMaterial({ map: maderaTextura })
);
p1mesa.receiveShadow = true;
p1mesa.castShadow = true;
p1mesa.position.set(2.2, 1, 3.8);
scene.add(p1mesa);

const p2mesa = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1, 0.1, 2, 32),
  new THREE.MeshStandardMaterial({ map: maderaTextura })
);
p2mesa.receiveShadow = true;
p2mesa.castShadow = true;
p2mesa.position.set(-2.2, 1, 3.8);
scene.add(p2mesa);

const p3mesa = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1, 0.1, 2, 32),
  new THREE.MeshStandardMaterial({ map: maderaTextura })
);
p3mesa.receiveShadow = true;
p3mesa.castShadow = true;
p3mesa.position.set(-2.2, 1, 2.2);
scene.add(p3mesa);


const p4mesa = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1, 0.1, 2, 32),
  new THREE.MeshStandardMaterial({ map: maderaTextura })
);
p4mesa.receiveShadow = true;
p4mesa.castShadow = true;
p4mesa.position.set(2.2, 1, 2.2);
scene.add(p4mesa);

//ventilador 

const mitadSuperior = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2),
  new THREE.MeshStandardMaterial({ color:  0xC0C0C0  , side: THREE.DoubleSide })
);
mitadSuperior.scale.set(1, 0.3, 1);
mitadSuperior.rotation.x = Math.PI / 2;
mitadSuperior.position.set(1, 3, 2.5 ); 
scene.add(mitadSuperior);

const ventilador = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
  new THREE.MeshStandardMaterial({ color: 0x000000  , side: THREE.DoubleSide })
);
ventilador.scale.set(1, 1, 1);
ventilador.rotation.x = Math.PI / 2;
ventilador.position.set(1, 3, 2.5); 
scene.add(ventilador);

const pata = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32),
  new THREE.MeshStandardMaterial({ color: 0x000000 })
);
pata.receiveShadow = true;
pata.castShadow = true;
pata.position.set(1, 2.4, 2.3);
scene.add(pata);

//extras
const hojam1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.6,0.01,0.9),
  new THREE.MeshStandardMaterial({ map: hojaTextura })
);
hojam1.receiveShadow = true;
hojam1.castShadow = true;
hojam1.rotation.y = Math.PI /-4;
hojam1.position.set(-1.7, 2.15, 2.6);
scene.add(hojam1);

const hojam2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.6,0.01,0.9),
  new THREE.MeshStandardMaterial({ map: hojaTextura })
);
hojam2.receiveShadow = true;
hojam2.castShadow = true;
hojam2.rotation.y = Math.PI /6;
hojam2.position.set(-1, 2.15, 3.4);
scene.add(hojam2);

const hojam3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.6,0.01,0.9),
  new THREE.MeshStandardMaterial({ map: hojaTextura })
);
hojam3.receiveShadow = true;
hojam3.castShadow = true;
hojam3.rotation.y = Math.PI /-6;
hojam3.position.set(0.5, 2.15, 3.4);
scene.add(hojam3);

const hojam4 = new THREE.Mesh(
  new THREE.SphereGeometry(0.2,4),
  new THREE.MeshStandardMaterial({ map: hojaTextura })
);
hojam4.receiveShadow = true;
hojam4.castShadow = true;
hojam4.rotation.y = Math.PI /-6;
hojam4.position.set(0, 2.3, 3);
scene.add(hojam4);

const hojam5 = new THREE.Mesh(
  new THREE.SphereGeometry(0.15,4),
  new THREE.MeshStandardMaterial({ map: hojaTextura })
);
hojam5.receiveShadow = true;
hojam5.castShadow = true;
hojam5.rotation.y = Math.PI /-6;
hojam5.position.set(2, 2.3, 3.5);
scene.add(hojam5);

const hojam6 = new THREE.Mesh(
  new THREE.SphereGeometry(0.15,4),
  new THREE.MeshStandardMaterial({ map: hojaTextura })
);
hojam6.receiveShadow = true;
hojam6.castShadow = true;
hojam6.rotation.y = Math.PI /-6;
hojam6.position.set(-0.5, 2.3, 2.7);
scene.add(hojam6);


const hoja1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.7, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja1.receiveShadow = true;
hoja1.castShadow = true;
hoja1.position.set(-4.5, 3.5, -5.8);
scene.add(hoja1);

const hoja2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja2.receiveShadow = true;
hoja2.castShadow = true;
hoja2.position.set(-4.9, 4, -5.75);
scene.add(hoja2);

const hoja3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.7, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja3.receiveShadow = true;
hoja3.castShadow = true;
hoja3.position.set(-4.2, 4.5, -5.7);
scene.add(hoja3);

const hoja4 = new THREE.Mesh(
  new THREE.BoxGeometry(0.7, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja4.receiveShadow = true;
hoja4.castShadow = true;
hoja4.position.set(-4.9, 5, -5.75);
scene.add(hoja4);

const hoja5 = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja5.receiveShadow = true;
hoja5.castShadow = true;
hoja5.position.set(-4, 5.3, -5.75);
scene.add(hoja5);

const hoja6 = new THREE.Mesh(
  new THREE.BoxGeometry(0.7, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja6.receiveShadow = true;
hoja6.castShadow = true;
hoja6.position.set(-4.5, 6, -5.7);
scene.add(hoja6);

const hoja7 = new THREE.Mesh(
  new THREE.BoxGeometry(0.7, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja7.receiveShadow = true;
hoja7.castShadow = true;
hoja7.position.set(4.5, 3, -5.7);
scene.add(hoja7);

const hoja8 = new THREE.Mesh(
  new THREE.BoxGeometry(0.9, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja8.receiveShadow = true;
hoja8.castShadow = true;
hoja8.position.set(5, 3.8, -5.8);
scene.add(hoja8);

const hoja9 = new THREE.Mesh(
  new THREE.BoxGeometry(0.9, 0.9,0.1),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja9.receiveShadow = true;
hoja9.castShadow = true;
hoja9.position.set(5.3, 2.5, -5.7);
scene.add(hoja9);

const hoja10 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1,0.01),
  new THREE.MeshStandardMaterial({ map: documentoTextura })
);
hoja10.receiveShadow = true;
hoja10.castShadow = true;
hoja10.position.set(5.9, 3.3, -5.7);
scene.add(hoja10);

//cartel
const cartel = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 2, 3.5),
  new THREE.MeshStandardMaterial({ map: cartelTextura })
);
cartel.receiveShadow = true;
cartel.castShadow = true;
cartel.position.set(-7.4, 5, 0.5);
scene.add(cartel);

//dibujos
const d1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 1.2, 1),
  new THREE.MeshStandardMaterial({ map: d1Textura })
);
d1.receiveShadow = true;
d1.castShadow = true;
d1.rotation.x = Math.PI /-9;
d1.position.set(7.4, 4.8, -2);
scene.add(d1);

const d2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 1.2, 1),
  new THREE.MeshStandardMaterial({ map: d2Textura })
);
d2.receiveShadow = true;
d2.castShadow = true;
d2.rotation.x = Math.PI /50;
d2.position.set(7.4, 4.5, -0.3);
scene.add(d2);

const d3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 1.2, 1),
  new THREE.MeshStandardMaterial({ map: d3Textura })
);
d3.receiveShadow = true;
d3.castShadow = true;
d3.rotation.x = Math.PI /20;
d3.position.set(7.4, 3.5, -1.3);
scene.add(d3);

const d4 = new THREE.Mesh(
  new THREE.BoxGeometry(0.01, 1.2, 1),
  new THREE.MeshStandardMaterial({ map: d4Textura })
);
d4.receiveShadow = true;
d4.castShadow = true;
d4.position.set(7.4, 5.6, -1);
scene.add(d4);

// lampara

const Lampara1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2),
  new THREE.MeshStandardMaterial({ color:  0x000000  , side: THREE.DoubleSide })
);
Lampara1.scale.set(1, 0.7, 1);
Lampara1.rotation.y = Math.PI / -2;
Lampara1.position.set(0, 6, 0 ); 
scene.add(Lampara1);


const colgante = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32),
  new THREE.MeshStandardMaterial({ color: 0x000000 })
);
colgante.receiveShadow = true;
colgante.castShadow = true;
colgante.position.set(0, 6.5, 0);
scene.add(colgante);


const bombillo = new THREE.Mesh(
  new THREE.SphereGeometry(0.15,32),
  new THREE.MeshStandardMaterial({ color: 0xFFA500  })
);
bombillo.receiveShadow = true;
bombillo.castShadow = true;
bombillo.rotation.y = Math.PI /-6;
bombillo.position.set(0, 6, 0);
scene.add(bombillo);


//ns


camera.position.set(0, 8, 12);




const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  renderer.render(scene, camera);
}