async function agregarClase(id, clase) {
    try {
        document.getElementById(id).classList.add(clase);
    } catch (error) {
        console.error(`Error al agregar clase ${clase} en ${id}:`, error);
    }
}

async function quitarClase(id, clase) {
    try {
        document.getElementById(id).classList.remove(clase);
    } catch (error) {
        console.error(`Error al quitar clase ${clase} en ${id}:`, error);
    }
}

async function toggleClase(id, clase) {
    try {
        document.getElementById(id).classList.toggle(clase);
    } catch (error) {
        console.error(`Error al hacer toggle de clase ${clase} en ${id}:`, error);
    }
}