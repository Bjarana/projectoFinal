const forme = document.getElementById('form');
const nombInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const direccionInput = document.getElementById('direccion');
const termsCheckbox = document.getElementById('termsCheckbox');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const nombre = nombreInput.value;
  const email = emailInput.value;
  const direccion = direccionInput.value;
  const termsAccepted = termsCheckbox.checked;

  
  if (!nombre.trim()) {
    alert('Por favor, ingresa tu nombre');
    return;
  }

  if (!email.trim() || !isValidEmail(email)) {
    alert('Por favor, ingresa un correo electrónico válido');
    return;
  }

  if (!direccion.trim()) {
    alert('Por favor, ingresa tu contraseña');
    return;
  }

  if (!termsAccepted) {
    alert('Debes aceptar los términos y condiciones');
    return;
  }

  
  console.log(`Nombre: ${nombre}`);
  console.log(`Email: ${email}`);
  console.log(`Contraseña: ${direccion}`);
  console.log('Términos y condiciones aceptados: Sí');

  
  nombreInput.value = '';
  emailInput.value = '';
  direccionInput.value = '';
  termsCheckbox.checked = false;
});

function isValidEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+)(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
