const fechaPresentacion = new Date('2024-07-07T07:00:00');//8 de agosto 2024


// Función para actualizar la cuenta regresiva y lanzar confeti cuando sea necesario
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = fechaPresentacion - ahora;

    if (diferencia <= 0) {
        // Si la cuenta regresiva ha terminado, mostrar "00" en lugar de números negativos
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        clearInterval(cuentaRegresivaInterval);
        // Aquí puedes agregar cualquier acción que desees realizar cuando la cuenta regresiva llegue a cero
        lanzarConfeti();
    } else {
        // Calcular y mostrar la cuenta regresiva normalmente
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = dias.toString().padStart(2, '0');
        document.getElementById("hours").textContent = horas.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutos.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = segundos.toString().padStart(2, '0');
    }
}

// Función para lanzar confeti y reproducir el sonido
function lanzarConfeti() {
    const config = {
        particleCount: 300, // Ajusta este valor para cambiar el número de confetis
        spread: 5000, // Ajusta este valor para cambiar la dispersión del confeti
        size: 10, // Ajusta este valor para cambiar el tamaño del confeti
    };
    confetti(config); // Lanza la animación de confeti con la configuración personalizada
    const explosionSound = document.getElementById("explosionSound");
    explosionSound.load(); // Carga el sonido
    explosionSound.play(); // Reproduce el sonido de la explosión
}

// Actualiza la cuenta regresiva cada segundo
const cuentaRegresivaInterval = setInterval(actualizarCuentaRegresiva, 1000);

// Actualiza la cuenta regresiva al cargar la página
actualizarCuentaRegresiva();
