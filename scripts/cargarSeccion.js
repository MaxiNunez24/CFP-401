async function traer(carpeta, archivo) {
    return fetch(`./${carpeta}/${archivo}.html`).then(response => response.text());
}

async function cargarSeccion(id, carpeta, archivo) {
    try {
        document.getElementById(id).innerHTML = await traer(carpeta, archivo);
    } catch (error) {
        console.error(`Error al cargar ${archivo}.html:`, error);
        return '';
    }
}

async function iniciarPagina() {

    cargarSeccion('header', 'sections', 'header');
    cargarSeccion('footer', 'sections', 'footer');
    //Cargar Página de inicio por defecto
    cargarSeccion('main', 'pages', 'inicio');
}

document.addEventListener('DOMContentLoaded', iniciarPagina);