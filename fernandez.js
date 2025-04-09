// Datos a cambiar
const datos_Fernandez = {
    nombre: 'Jean Piere',
    apellido: 'Fernandez Torres',
    id: '1505639',
    direccion: 'Puente Piedra - Zapallal',
};

// contenedor de los datos
const verDatos = document.querySelector('.verDatos');

// clonar el template
function cloneTemplate() {
    const template = document.querySelector('#datosAlumnos');
    const clone = template.content.cloneNode(true);

    const id = clone.querySelector('.id');
    const nombre = clone.querySelector('.nombre');
    const apellido = clone.querySelector('.apellido');
    const direccion = clone.querySelector('.direccion');

    id.textContent = `ID: ${datos_Fernandez.id}`;
    nombre.textContent = `Nombre: ${datos_Fernandez.nombre}`;
    apellido.textContent = `Apellido: ${datos_Fernandez.apellido}`;
    direccion.textContent = `Direccion: ${datos_Fernandez.direccion}`;

    verDatos.appendChild(clone);
}

// ejecutar la funcion
cloneTemplate();
