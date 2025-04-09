document.addEventListener("DOMContentLoaded", ()=>{
    // Datos a cambiar
    const datos_Ayma = {
        nombre: 'Anthony Yamil',
        apellido: 'Ayma Leon',
        id: '1528920',
        direccion: 'Independencia, Lima',
    };
    
    // contenedor de los datos
    const verDatos = document.querySelector('.verDatos');
    
    // clonar el template
    function cloneTemplate(dato) {
        const template = document.querySelector('#datosAlumnos');
        const clone = template.content.cloneNode(true);
    
        const id = clone.querySelector('.id');
        const nombre = clone.querySelector('.nombre');
        const apellido = clone.querySelector('.apellido');
        const direccion = clone.querySelector('.direccion');
    
        id.textContent = `ID: ${dato.id}`;
        nombre.textContent = `Nombre: ${dato.nombre}`;
        apellido.textContent = `Apellido: ${dato.apellido}`;
        direccion.textContent = `Direccion: ${dato.direccion}`;
    
        verDatos.appendChild(clone);
    }
    
    // ejecutar la funcion
    cloneTemplate(datos_Ayma);
})
