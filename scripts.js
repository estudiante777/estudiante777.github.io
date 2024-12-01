// Cambiar el texto dinámicamente al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    // Ejemplo: Cambiar el mensaje en la sección Inicio
    const inicioText = document.querySelector("#inicio p");
    inicioText.textContent = "¡Tome acción hoy para un mejor mañana!";
});

// Función para resaltar la sección activa al hacer clic en el menú
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        document.querySelectorAll(".section").forEach(sec => sec.style.background = "#f4f4f4");
        const targetId = event.target.getAttribute("href").substring(1);
        document.querySelector(`#${targetId}`).style.background = "#d9ffd9"; // Resalta
    });
});

