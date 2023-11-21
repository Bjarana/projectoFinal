const form = document.getElementById('form');
const nombreInput = document.getElementById('nombre');
const comentarioInput = document.getElementById('comentario');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const nombre = nombreInput.value;
  const comentario = comentarioInput.value;

  // Validate and process user input
  if (!nombre.trim()) {
    alert('Por favor, ingresa tu nombre');
    return;
  }

  if (!comentario.trim()) {
    alert('Por favor, ingresa un comentario');
    return;
  }

  // Submit feedback to server or perform other actions
  console.log(`Nombre: ${nombre}`);
  console.log(`Comentario: ${comentario}`);

  // Reset form fields
  nombreInput.value = '';
  comentarioInput.value = '';

  // Close the modal
  const modal = document.getElementById('staticBackdrop');
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
});
