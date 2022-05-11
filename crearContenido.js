import { guardarPublicacion, getPublicacion } from './firebase.js';
const form = document.getElementById("publicacion"); // Se obtiene la información del formulario

/*form.addEventListener('submit', (e) => {
    event.preventDefault(); // Evita que se refresque la página y se borren los datos
    
    let titulo = form["titulo"].value;
    let autor = form["autor"].value;
    let contenido = form["contenido"].value;
    alert("Publicación creada");

     // Resetea los inputs 
    document.getElementById("publicacion").reset();

    // muestra los datos en la página por medio de HTML 
    document.getElementById("texto").innerHTML = titulo + "<br><br>" + autor + "<br><br>" + contenido;
})*/


// Este evento permite obtener los datos del formulario y añadirlos a la base de datos.
form.addEventListener('submit', (e) => {
    event.preventDefault(); // Evita que se refresque la página y se borren los datos
    
    let titulo = form["titulo"].value;
    let autor = form["autor"].value;
    let contenido = form["contenido"].value;
    guardarPublicacion(titulo, autor, contenido);
    form.reset();
    alert("Publicación creada");
})
