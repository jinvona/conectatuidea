document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cotizacion-form');
    form.addEventListener('submit', function(event) {
        // Validación simple
        const nombre = document.getElementById('nombre').value;
        if (!nombre) {
            alert('Por favor, ingresa tu nombre.');
            event.preventDefault();
            return;
        }
        alert('¡Cotización enviada! Te contactaremos pronto.');
    });
});