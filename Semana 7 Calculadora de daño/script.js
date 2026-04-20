// Datos de personajes
const personajes = {
  mago:    { nombre: "Mago",    vida: 80,  ataque: 30, defensa: 5  },
  arquero: { nombre: "Arquero", vida: 100, ataque: 20, defensa: 10 },
  heroe:   { nombre: "Héroe",   vida: 150, ataque: 15, defensa: 20 }
};

//Estado del juego
let vidaMonstruo = 120;
const ataqueMonstruo = 25;

let personajeActual = null;
let vidaPersonaje = 0;

// Referencias al HTML
let textoNombre    = document.getElementById("nombre-personaje");
let textoVidaPersonaje  = document.getElementById("vida-personaje");
let textoVidaMonstruo   = document.getElementById("vida-monstruo");
let textoEstado    = document.getElementById("estado");

// Actualizar pantalla 
function actualizarPantalla() {
  textoVidaMonstruo.textContent = vidaMonstruo > 0 ? vidaMonstruo : 0;

  if (personajeActual) {
    textoNombre.textContent = personajeActual.nombre;
    textoVidaPersonaje.textContent = vidaPersonaje > 0 ? vidaPersonaje : 0;
  }
}

// Seleccionar personaje 
function seleccionarPersonaje(tipo) {
  vidaMonstruo = 120;
  personajeActual = personajes[tipo];
  vidaPersonaje = personajeActual.vida;
  textoEstado.textContent = "";
  actualizarPantalla();
}

document.getElementById("btn-mago").addEventListener("click", function() {
  seleccionarPersonaje("mago");
});

document.getElementById("btn-arquero").addEventListener("click", function() {
  seleccionarPersonaje("arquero");
});

document.getElementById("btn-heroe").addEventListener("click", function() {
  seleccionarPersonaje("heroe");
});

// Atacar 
document.getElementById("btn-atacar").addEventListener("click", function() {
  if (!personajeActual) {
    textoEstado.textContent = "¡Elige un personaje primero!";
    return;
  }
  if (vidaMonstruo <= 0) {
    textoEstado.textContent = "El monstruo ya esta derrotado.";
    return;
  }
  if (vidaPersonaje <= 0) {
    textoEstado.textContent = "Has perdido. No puedes atacar.";
    return;
  }

  vidaMonstruo = vidaMonstruo - personajeActual.ataque;

  if (vidaMonstruo <= 0) {
    vidaMonstruo = 0;
    textoEstado.textContent = " ¡Monstruo derrotado!";
  } else {
    textoEstado.textContent = "Golpeaste al monstruo por " + personajeActual.ataque + " de daño.";
  }

  actualizarPantalla();
});

// Contraataque 
document.getElementById("btn-contraataque").addEventListener("click", function() {
  if (!personajeActual) {
    textoEstado.textContent = "¡Elige un personaje primero!";
    return;
  }
  if (vidaMonstruo <= 0) {
    textoEstado.textContent = "El monstruo ya esta derrotado.";
    return;
  }
  if (vidaPersonaje <= 0) {
    textoEstado.textContent = "Has perdido.";
    return;
  }



  let danioRecibido = ataqueMonstruo - personajeActual.defensa;
  if (danioRecibido < 1) {
    danioRecibido = 1;
  }

  vidaPersonaje = vidaPersonaje - danioRecibido;

  if (vidaPersonaje <= 0) {
    vidaPersonaje = 0;
    textoEstado.textContent = " Has perdido.";
  } else {
    textoEstado.textContent = "El monstruo te golpeo por " + danioRecibido + " de daño.";
  }

  actualizarPantalla();
});