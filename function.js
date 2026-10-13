document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Obtenemos los valores de los campos y eliminamos espacios vacíos en los extremos
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const asunto = document.getElementById('asunto').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // 1. Validar que ningún campo esté vacío
            if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
                alert('Por favor, completa todos los campos del formulario.');
                event.preventDefault(); // Evita que se envíe el formulario
                return;
            }

            // 2. Validar el formato del correo electrónico usando una expresión regular
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexCorreo.test(correo)) {
                alert('Por favor, introduce un correo electrónico válido (ejemplo: usuario@dominio.com).');
                event.preventDefault(); // Evita que se envíe el formulario
                return;
            }

            // Si todo es correcto, el formulario se enviará
            alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
        });
    }
});