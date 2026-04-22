import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';


/* ── Carrusel portada ── */
(function () {
  const portada               = document.getElementById('portadaCarrusel');
  const diapositivas          = portada.querySelectorAll('.diapositiva');
  const contenedorIndicadores = document.getElementById('indicadores');
  const botonAnterior         = document.getElementById('flechaAnterior');
  const botonSiguiente        = document.getElementById('flechaSiguiente');

  let posicionActual = 0;

  diapositivas.forEach((_, i) => {
    const indicador = document.createElement('button');
    indicador.className = 'indicador' + (i === 0 ? ' activo' : '');
    indicador.setAttribute('aria-label', 'Ir a diapositiva ' + (i + 1));
    indicador.addEventListener('click', () => irA(i));
    contenedorIndicadores.appendChild(indicador);
  });

  function obtenerIndicadores() {
    return contenedorIndicadores.querySelectorAll('.indicador');
  }

  function irA(indice) {
    diapositivas[posicionActual].classList.remove('activa');
    obtenerIndicadores()[posicionActual].classList.remove('activo');

    posicionActual = (indice + diapositivas.length) % diapositivas.length;

    diapositivas[posicionActual].classList.add('activa');
    obtenerIndicadores()[posicionActual].classList.add('activo');
  }

  botonAnterior.addEventListener('click', () => irA(posicionActual - 1));
  botonSiguiente.addEventListener('click', () => irA(posicionActual + 1));
})();


/* ── Carrusel tarjetas ── */
(function () {
  const pista                 = document.getElementById('pisaTarjetas');
  const tarjetas              = pista.querySelectorAll('.tarjeta');
  const contenedorIndicadores = document.getElementById('indicadoresTarjetas');
  const flechaAnterior        = document.getElementById('flechaTarjetaAnterior');
  const flechaSiguiente       = document.getElementById('flechaTarjetaSiguiente');

  const total          = tarjetas.length;
  let   posicionActual = 0;

  /* Crear indicadores */
  tarjetas.forEach((_, i) => {
    const indicador = document.createElement('button');
    indicador.className = 'indicadortarjeta' + (i === 0 ? ' activo' : '');
    indicador.setAttribute('aria-label', 'Ir a tarjeta ' + (i + 1));
    indicador.addEventListener('click', () => irATarjeta(i));
    contenedorIndicadores.appendChild(indicador);
  });

  function obtenerIndicadores() {
    return contenedorIndicadores.querySelectorAll('.indicadortarjeta');
  }

  function calcularDesplazamiento(indice) {
    let offsetAcumulado = 0;
    for (let i = 0; i < indice; i++) {
      const margen = parseFloat(getComputedStyle(tarjetas[i + 1]).marginLeft) || 0;
      offsetAcumulado += tarjetas[i].offsetWidth + margen;
    }
    return -offsetAcumulado;
  }

  function actualizarFlechas() {
    if (posicionActual <= 0) {
      flechaAnterior.classList.add('oculta');
    } else {
      flechaAnterior.classList.remove('oculta');
    }
    if (posicionActual >= total - 1) {
      flechaSiguiente.classList.add('oculta');
    } else {
      flechaSiguiente.classList.remove('oculta');
    }
  }

  function irATarjeta(indice) {
    obtenerIndicadores()[posicionActual].classList.remove('activo');

    posicionActual = Math.max(0, Math.min(indice, total - 1));

    pista.style.transform = `translateX(${calcularDesplazamiento(posicionActual)}px)`;

    obtenerIndicadores()[posicionActual].classList.add('activo');

    actualizarFlechas();
  }

  flechaAnterior.addEventListener('click', () => irATarjeta(posicionActual - 1));
  flechaSiguiente.addEventListener('click', () => irATarjeta(posicionActual + 1));

  actualizarFlechas();
})();


/* ── Cards informativas ── */
(function () {
  const rutasDestino = {
    carga:  'https://www.tesla.com/es_MX/charging',
    prueba: 'https://www.tesla.com/es_MX/drive',
  };

  const mensajesBoton = {
    carga:  'Explorando opciones de carga...',
    prueba: 'Agendando tu prueba de manejo...',
  };

  /* Expuesta globalmente para los onclick del HTML */
  window.manejarClickCard = function (tipoCard) {
    const idCard  = tipoCard === 'carga' ? 'cardCarga' : 'cardExperiencia';
    const card    = document.getElementById(idCard);

    /* Pulso de feedback en la card */
    card.style.transition = 'box-shadow 0.15s ease, transform 0.15s ease';
    card.style.transform  = 'scale(0.985)';
    card.style.boxShadow  = '0 2px 8px rgba(0,0,0,0.18)';

    setTimeout(() => {
      card.style.transform = '';
      card.style.boxShadow = '';
    }, 200);

    mostrarToastCard(mensajesBoton[tipoCard]);

    setTimeout(() => {
      console.log('Navegando a:', rutasDestino[tipoCard]);
      /* window.location.href = rutasDestino[tipoCard]; */
    }, 900);
  };

  function mostrarToastCard(mensaje) {
    const anterior = document.getElementById('toastCardInfo');
    if (anterior) anterior.remove();

    const contenedor = document.createElement('div');
    contenedor.id = 'toastCardInfo';
    contenedor.style.cssText = `
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      min-width: 260px;
    `;

    contenedor.innerHTML = `
      <div class="toast align-items-center text-bg-dark border-0 show" role="alert">
        <div class="d-flex">
          <div class="toast-body fw-semibold" style="font-size:0.88rem; letter-spacing:0.01em;">
            ${mensaje}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Cerrar"></button>
        </div>
      </div>
    `;

    document.body.appendChild(contenedor);

    contenedor.querySelector('.btn-close').addEventListener('click', () => contenedor.remove());

    setTimeout(() => {
      contenedor.style.transition = 'opacity 0.3s ease';
      contenedor.style.opacity    = '0';
      setTimeout(() => contenedor.remove(), 300);
    }, 2500);
  }

  /* Animación de entrada al cargar */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cardinfo').forEach((card, i) => {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      setTimeout(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
      }, 100 + i * 130);
    });
  });
})();