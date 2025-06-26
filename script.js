import './less/estilo.less'

const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const formulario = document.getElementById('formulario-contacto');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');


const soloLetrasYEspacio = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validación keypress en Nombre
nombreInput.addEventListener('keypress', (e) => {
  const char = String.fromCharCode(e.keyCode);
  if (!soloLetrasYEspacio.test(char)) {
    e.preventDefault();
  }
});

// Validación input correo
emailInput.addEventListener('input', () => {
  emailInput.style.borderColor = correoValido.test(emailInput.value)
    ? 'green'
    : 'red';
});

// Validar mensaje no vacío
mensajeInput.addEventListener('input', () => {
  mensajeInput.style.borderColor = mensajeInput.value.trim().length > 0
    ? 'green'
    : 'red';
});

// Validación final al enviar
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreValido = soloLetrasYEspacio.test(nombreInput.value.trim());
  const correoEsValido = correoValido.test(emailInput.value.trim());
  const mensajeLleno = mensajeInput.value.trim().length > 0;

  if (!nombreValido) {
    alert('El nombre solo puede contener letras y espacios.');
    return;
  }

  if (!correoEsValido) {
    alert('Ingresa un correo válido.');
    return;
  }

  if (!mensajeLleno) {
    alert('El mensaje no puede estar vacío.');
    return;
  }

  alert('Mensaje enviado con éxito.')
  formulario.reset();
});
