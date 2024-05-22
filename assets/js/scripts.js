// JavaScript para enviar correos electrónicos utilizando EmailJS

// Inicializar EmailJS con tu Public Key
emailjs.init('UThgtTzcmG7shAIhb');

// Función para enviar correo electrónico
function enviarCorreo() {
    // Obtener los datos del formulario
    var formData = {
        name: document.getElementById('From_name').value,
        email: document.getElementById('From_email').value,
        message: document.getElementById('message').value
    };

    // Enviar el correo electrónico utilizando la plantilla definida en EmailJS
    emailjs.send('service_u1dme8c', 'template_6dxd4tj', formData) 
        .then(function(response) {
            console.log('Correo electrónico enviado con éxito!', response);
            // Mostrar mensaje de éxito
            alert('¡Mensaje enviado correctamente!');
            // Limpiar los campos del formulario
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.error('Error al enviar el correo electrónico:', error);
            // Mostrar mensaje de error
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        });
}


document.getElementById('sobreMiLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert("¡Aun no disponible!");
});