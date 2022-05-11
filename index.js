import { getPublicacion } from './firebase.js';
const mostrarPublicacion = document.getElementById("verPublicaciones");



// Este evento se ejecuta cada vez que la página se carga
window.addEventListener('DOMContentLoaded', async (event) => {
    const querySnapshot = await getPublicacion() // Trae los datos que hay en ese momento
    console.log(querySnapshot) // Trae todo el objeto grande de firebase
    let html = ""

    querySnapshot.forEach(doc => {
        // doc contiene un objeto de firebase con los documentos. El .data lo convierte en objeto js
        const pub = doc.data() 
        html += `
            <article>
                <h1> ${pub.titulo} </h1>
                <h4> ${pub.autor} </h4>
                <p> ${pub.contenido} </p>
            </article>
        `
    });
    mostrarPublicacion.innerHTML = html
});