
const inputNombre = document.getElementById('nombre');
const inputApodo = document.getElementById('apodo');
const inputDescripcion = document.getElementById('descripcion');
const inputImagen = document.getElementById('imagen');


const tarjetaNombre = document.getElementById('tarjeta-nombre');
const tarjetaApodo = document.getElementById('tarjeta-apodo');
const tarjetaDescripcion = document.getElementById('tarjeta-descripcion');
const tarjetaImagen = document.getElementById('tarjeta-imagen');


const botonActualizar = document.getElementById('actualizar-tarjeta');


botonActualizar.addEventListener('click', () => {
    tarjetaNombre.textContent = inputNombre.value || 'Nombre';
    tarjetaApodo.textContent = inputApodo.value || 'Apodo';
    tarjetaDescripcion.textContent = inputDescripcion.value || 'Descripción';
    tarjetaImagen.src = inputImagen.value || 'https://via.placeholder.com/120';
});

