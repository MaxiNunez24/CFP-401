
function mostrarMensaje() {
    alert('¡Hola, mundo!');
}




document.getElementById('formulario').addEventListener('submit', cambiarTexto);

function cambiarTexto(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
    const nuevoTexto = document.getElementById('nuevoTexto').value;
    document.getElementById('texto').innerText = nuevoTexto;
}