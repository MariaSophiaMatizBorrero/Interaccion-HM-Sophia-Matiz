import * as THREE from 'three';

// Barra de progreso de scroll
const barraScroll = document.getElementById('indicadorScroll');
window.addEventListener('scroll', () => {
  const maximo = document.body.scrollHeight - window.innerHeight;
  const progreso = window.scrollY / maximo;
  if (barraScroll) barraScroll.style.height = (progreso * 100) + '%';
});

// Escena de fondo con particulas
const canvasFondo = document.getElementById('canvasFondo');
const rendererFondo = new THREE.WebGLRenderer({ canvas: canvasFondo, alpha: true });
rendererFondo.setPixelRatio(Math.min(devicePixelRatio, 2));
rendererFondo.setClearColor(0x000000, 0);

const escenaFondo = new THREE.Scene();
const camaraFondo = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 100);
camaraFondo.position.z = 5;

const cantidadParticulas = 250;
const posicionesParticulas = new Float32Array(cantidadParticulas * 3);
for (let i = 0; i < cantidadParticulas * 3; i++) {
  posicionesParticulas[i] = (Math.random() - 0.5) * 18;
}
const geoParticulas = new THREE.BufferGeometry();
geoParticulas.setAttribute('position', new THREE.BufferAttribute(posicionesParticulas, 3));
const matParticulas = new THREE.PointsMaterial({ color: 0xe8c87a, size: 0.05, transparent: true, opacity: 0.4 });
const nubeParticulas = new THREE.Points(geoParticulas, matParticulas);
escenaFondo.add(nubeParticulas);

window.addEventListener('resize', () => {
  camaraFondo.aspect = innerWidth / innerHeight;
  camaraFondo.updateProjectionMatrix();
  rendererFondo.setSize(innerWidth, innerHeight);
});
rendererFondo.setSize(innerWidth, innerHeight);

let mouseFondoX = 0;
let mouseFondoY = 0;
let camaraFondoX = 0;
let camaraFondoY = 0;

document.addEventListener('mousemove', (e) => {
  mouseFondoX = (e.clientX / innerWidth) * 2 - 1;
  mouseFondoY = -(e.clientY / innerHeight) * 2 + 1;
});

const relojFondo = new THREE.Clock();

function animarFondo() {
  requestAnimationFrame(animarFondo);
  const t = relojFondo.getElapsedTime();
  camaraFondoX += (mouseFondoX * 0.4 - camaraFondoX) * 0.02;
  camaraFondoY += (mouseFondoY * 0.25 - camaraFondoY) * 0.02;
  camaraFondo.position.x = camaraFondoX;
  camaraFondo.position.y = camaraFondoY;
  camaraFondo.lookAt(0, 0, 0);
  nubeParticulas.rotation.y = t * 0.01;
  rendererFondo.render(escenaFondo, camaraFondo);
}
animarFondo();


// Obra 1: esferas orbitando
const canvasObra1 = document.getElementById('canvasObra1');
const envolObra1 = document.querySelector('#obra1 .obraCanvasWrap');

const anchoObra1 = envolObra1.clientWidth || 500;
const altoObra1 = envolObra1.clientHeight || 375;

const rendererObra1 = new THREE.WebGLRenderer({ canvas: canvasObra1, antialias: true });
rendererObra1.setSize(anchoObra1, altoObra1);
rendererObra1.setPixelRatio(Math.min(devicePixelRatio, 2));
rendererObra1.setClearColor(0x050510);

const escenaObra1 = new THREE.Scene();
const camaraObra1 = new THREE.PerspectiveCamera(60, anchoObra1 / altoObra1, 0.1, 100);
camaraObra1.position.set(0, 0, 6);

escenaObra1.add(new THREE.AmbientLight(0xffffff, 0.3));
const luzDirObra1 = new THREE.DirectionalLight(0xffffff, 1.2);
luzDirObra1.position.set(5, 8, 5);
escenaObra1.add(luzDirObra1);

const luzDorada = new THREE.PointLight(0xe8c87a, 4, 15);
luzDorada.position.set(-3, 4, 3);
escenaObra1.add(luzDorada);

const luzLila = new THREE.PointLight(0xc47aff, 3, 12);
luzLila.position.set(3, -2, 2);
escenaObra1.add(luzLila);

const coloresEsferas = [0xe8c87a, 0xc47aff, 0x4aa8ff, 0xff6b35, 0x50fa7b, 0xffffff];
const listaEsferas = [];

for (let i = 0; i < 10; i++) {
  const radio = 0.15 + Math.random() * 0.25;
  const geo = new THREE.SphereGeometry(radio, 20, 20);
  const mat = new THREE.MeshStandardMaterial({
    color: coloresEsferas[i % coloresEsferas.length],
    roughness: 0.15,
    metalness: 0.6,
  });
  const esfera = new THREE.Mesh(geo, mat);
  esfera.userData.anguloInicial = (i / 10) * Math.PI * 2;
  esfera.userData.radioOrbita = 1.0 + Math.random() * 1.8;
  esfera.userData.inclinacion = (Math.random() - 0.5) * Math.PI;
  esfera.userData.velOrbita = 0.2 + Math.random() * 0.3;
  escenaObra1.add(esfera);
  listaEsferas.push(esfera);
}

const esferaCentral = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 28, 28),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, metalness: 0.9 })
);
escenaObra1.add(esferaCentral);

let mouseObra1X = 0;
let mouseObra1Y = 0;
let camaraObra1X = 0;
let camaraObra1Y = 0;

canvasObra1.addEventListener('mousemove', (e) => {
  const rect = canvasObra1.getBoundingClientRect();
  mouseObra1X = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouseObra1Y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
});

const relojObra1 = new THREE.Clock();

function animarObra1() {
  requestAnimationFrame(animarObra1);
  const t = relojObra1.getElapsedTime();
  camaraObra1X += (mouseObra1X * 1.8 - camaraObra1X) * 0.04;
  camaraObra1Y += (mouseObra1Y * 1.1 - camaraObra1Y) * 0.04;
  camaraObra1.position.x = camaraObra1X;
  camaraObra1.position.y = camaraObra1Y;
  camaraObra1.lookAt(0, 0, 0);
  listaEsferas.forEach((esfera, idx) => {
    const u = esfera.userData;
    const ang = u.anguloInicial + t * u.velOrbita;
    const r = u.radioOrbita;
    const inc = u.inclinacion;
    esfera.position.x = Math.cos(ang) * r * Math.cos(inc);
    esfera.position.y = Math.sin(inc) * r + Math.sin(t * 0.4 + idx) * 0.15;
    esfera.position.z = Math.sin(ang) * r * Math.cos(inc);
  });
  esferaCentral.rotation.y = t * 0.2;
  luzDorada.position.x = Math.sin(t * 0.5) * 4;
  luzDorada.position.z = Math.cos(t * 0.5) * 4;
  rendererObra1.render(escenaObra1, camaraObra1);
}
animarObra1();


// Obra 2: toroides que rotan segun el scroll
const canvasObra2 = document.getElementById('canvasObra2');
const envolObra2 = document.querySelector('#obra2 .obraCanvasWrap');

const anchoObra2 = envolObra2.clientWidth || 500;
const altoObra2 = envolObra2.clientHeight || 375;

const rendererObra2 = new THREE.WebGLRenderer({ canvas: canvasObra2, antialias: true });
rendererObra2.setSize(anchoObra2, altoObra2);
rendererObra2.setPixelRatio(Math.min(devicePixelRatio, 2));
rendererObra2.setClearColor(0x050508);

const escenaObra2 = new THREE.Scene();
const camaraObra2 = new THREE.PerspectiveCamera(60, anchoObra2 / altoObra2, 0.1, 100);
camaraObra2.position.set(0, 1.5, 6);
camaraObra2.lookAt(0, 0, 0);

escenaObra2.add(new THREE.AmbientLight(0xffffff, 0.2));

const luzDoradaObra2 = new THREE.PointLight(0xe8c87a, 5, 12);
escenaObra2.add(luzDoradaObra2);

const luzLilaObra2 = new THREE.PointLight(0xc47aff, 5, 12);
escenaObra2.add(luzLilaObra2);

const luzAzulObra2 = new THREE.PointLight(0x4aa8ff, 4, 12);
escenaObra2.add(luzAzulObra2);

const toroide = new THREE.Mesh(
  new THREE.TorusGeometry(1.6, 0.4, 28, 100),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.08, metalness: 0.85 })
);
escenaObra2.add(toroide);

const toroideSec = new THREE.Mesh(
  new THREE.TorusGeometry(1.0, 0.15, 14, 70),
  new THREE.MeshStandardMaterial({ color: 0xe8c87a, roughness: 0.2, metalness: 0.7 })
);
toroideSec.rotation.x = Math.PI / 2;
escenaObra2.add(toroideSec);

let scrollObra2 = 0;
const relojObra2 = new THREE.Clock();

function animarObra2() {
  requestAnimationFrame(animarObra2);
  const t = relojObra2.getElapsedTime();
  const scrollObjetivo = window.scrollY * 0.0008;
  scrollObra2 += (scrollObjetivo - scrollObra2) * 0.05;
  toroide.rotation.y = scrollObra2 * 4 + t * 0.1;
  toroide.rotation.x = scrollObra2 * 2;
  toroideSec.rotation.y = t * 0.3 - scrollObra2 * 3;
  toroideSec.rotation.z = scrollObra2 * 2;
  luzDoradaObra2.position.set(Math.cos(t * 0.6) * 4, Math.sin(t * 0.4) * 2, Math.sin(t * 0.6) * 4);
  luzLilaObra2.position.set(Math.cos(t * 0.4 + 2) * 4, Math.sin(t * 0.3) * 2, Math.sin(t * 0.4 + 2) * 4);
  luzAzulObra2.position.set(Math.cos(t * 0.5 + 4) * 4, Math.sin(t * 0.5) * 2, Math.sin(t * 0.5 + 4) * 4);
  rendererObra2.render(escenaObra2, camaraObra2);
}
animarObra2();


// Obra 3: cristales interactivos
const canvasObra3 = document.getElementById('canvasObra3');
const envolObra3 = document.querySelector('#obra3 .obraCanvasWrap');
const mensajeRay = document.getElementById('raycastMsg');

const anchoObra3 = envolObra3.clientWidth || 500;
const altoObra3 = envolObra3.clientHeight || 375;

const rendererObra3 = new THREE.WebGLRenderer({ canvas: canvasObra3, antialias: true });
rendererObra3.setSize(anchoObra3, altoObra3);
rendererObra3.setPixelRatio(Math.min(devicePixelRatio, 2));
rendererObra3.setClearColor(0x020208);

const escenaObra3 = new THREE.Scene();
const camaraObra3 = new THREE.PerspectiveCamera(60, anchoObra3 / altoObra3, 0.1, 100);
camaraObra3.position.set(0, 2, 8);
camaraObra3.lookAt(0, 0, 0);

escenaObra3.add(new THREE.AmbientLight(0xffffff, 0.15));
const luzPrincipal = new THREE.PointLight(0xffffff, 2, 15);
luzPrincipal.position.set(0, 5, 5);
escenaObra3.add(luzPrincipal);

const datosCristales = [
  { colorBase: 0x880000, colorActivo: 0xff3333, nombre: 'Rubi',      posX: -4 },
  { colorBase: 0x003366, colorActivo: 0x4aa8ff, nombre: 'Zafiro',    posX: -2 },
  { colorBase: 0x006633, colorActivo: 0x50fa7b, nombre: 'Esmeralda', posX:  0 },
  { colorBase: 0x664400, colorActivo: 0xe8c87a, nombre: 'Topacio',   posX:  2 },
  { colorBase: 0x440066, colorActivo: 0xc47aff, nombre: 'Amatista',  posX:  4 },
];

const listaCristales = datosCristales.map((datos) => {
  const geo = new THREE.OctahedronGeometry(0.7, 0);
  geo.scale(1, 2, 1);
  const mat = new THREE.MeshStandardMaterial({
    color: datos.colorBase,
    roughness: 0.05,
    metalness: 0.3,
    transparent: true,
    opacity: 0.85,
  });
  const malla = new THREE.Mesh(geo, mat);
  malla.position.set(datos.posX, 0, 0);
  malla.name = datos.nombre;
  malla.userData.colorBase = datos.colorBase;
  malla.userData.colorActivo = datos.colorActivo;
  malla.userData.seleccionado = false;
  const luzInterna = new THREE.PointLight(datos.colorActivo, 0.5, 2);
  malla.add(luzInterna);
  malla.userData.luzInterna = luzInterna;
  escenaObra3.add(malla);
  return malla;
});

const suelo = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: 0x050510, roughness: 0.8 })
);
suelo.rotation.x = -Math.PI / 2;
suelo.position.y = -1.5;
escenaObra3.add(suelo);

const lanzadorRayos = new THREE.Raycaster();
const posicionMouse = new THREE.Vector2();
let cristalHover = null;
let cristalSel = null;

function calcularNDC(e) {
  const rect = canvasObra3.getBoundingClientRect();
  posicionMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  posicionMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
}

canvasObra3.addEventListener('mousemove', (e) => {
  calcularNDC(e);
  lanzadorRayos.setFromCamera(posicionMouse, camaraObra3);
  const intersecciones = lanzadorRayos.intersectObjects(listaCristales);
  if (cristalHover && cristalHover !== cristalSel) {
    cristalHover.material.emissive.setHex(0x000000);
  }
  cristalHover = intersecciones.length > 0 ? intersecciones[0].object : null;
  if (cristalHover && cristalHover !== cristalSel) {
    cristalHover.material.emissive.setHex(0x222222);
  }
  canvasObra3.style.cursor = cristalHover ? 'pointer' : 'default';
});

canvasObra3.addEventListener('click', (e) => {
  calcularNDC(e);
  lanzadorRayos.setFromCamera(posicionMouse, camaraObra3);
  const intersecciones = lanzadorRayos.intersectObjects(listaCristales);
  if (intersecciones.length > 0) {
    if (cristalSel) {
      cristalSel.material.color.setHex(cristalSel.userData.colorBase);
      cristalSel.material.emissive.setHex(0x000000);
      cristalSel.material.emissiveIntensity = 0;
      cristalSel.userData.luzInterna.intensity = 0.5;
      cristalSel.userData.seleccionado = false;
      cristalSel.scale.setScalar(1);
    }
    cristalSel = intersecciones[0].object;
    cristalSel.material.color.setHex(cristalSel.userData.colorActivo);
    cristalSel.material.emissive.setHex(cristalSel.userData.colorActivo);
    cristalSel.material.emissiveIntensity = 0.3;
    cristalSel.userData.luzInterna.intensity = 3;
    cristalSel.userData.luzInterna.color.setHex(cristalSel.userData.colorActivo);
    cristalSel.userData.seleccionado = true;
    if (mensajeRay) mensajeRay.textContent = cristalSel.name + ' seleccionado';
  }
});

const relojObra3 = new THREE.Clock();

function animarObra3() {
  requestAnimationFrame(animarObra3);
  const t = relojObra3.getElapsedTime();
  listaCristales.forEach((cristal, i) => {
    cristal.position.y = Math.sin(t * 0.6 + i * 1.1) * 0.2;
    if (!cristal.userData.seleccionado) {
      cristal.rotation.y += 0.005;
    } else {
      cristal.rotation.y += 0.02;
      cristal.scale.setScalar(1 + Math.sin(t * 4) * 0.04);
    }
  });
  luzPrincipal.position.x = Math.sin(t * 0.4) * 5;
  luzPrincipal.position.z = Math.cos(t * 0.4) * 5;
  rendererObra3.render(escenaObra3, camaraObra3);
}
animarObra3();