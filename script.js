// script.js

function mostrarMensaje() {
    alert("¡Gracias por visitar BloxNet!");
}

// Función para alternar la visibilidad de las secciones
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        } else {
            section.style.display = 'none'; // Oculta las demás secciones
        }
    });
}

// Función para agregar imágenes
function agregarImagen() {
    const input = document.getElementById('imagen-input');
    const imagenDiv = document.getElementById('noticias-imagenes'); // Cambia esto según la sección

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%'; // Ajusta el tamaño de la imagen
            img.style.borderRadius = '8px';
            img.style.marginBottom = '10px';
            imagenDiv.appendChild(img);
        }

        reader.readAsDataURL(input.files[0]);
        input.value = ''; // Reinicia el input después de subir la imagen
    }
}

// Función para alternar el modo de edición
function toggleEdit(sectionId) {
    const articles = document.querySelectorAll(`#${sectionId} .editable`);
    articles.forEach(article => {
        article.contentEditable = article.contentEditable === "true" ? "false" : "true"; // Alterna entre editable y no editable
        article.style.border = article.contentEditable === "true" ? "1px solid #4CAF50" : "none"; // Añade borde si es editable
    });
}

// Espera a que el contenido de la página se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Crea un botón
    const boton = document.createElement("button");
    boton.textContent = "Haz clic aquí";
    boton.onclick = mostrarMensaje;

    // Agrega el botón al cuerpo de la página
    document.body.appendChild(boton);
});