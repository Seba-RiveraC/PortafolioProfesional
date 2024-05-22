
// Inicializar EmailJS con tu Public Key
emailjs.init('UThgtTzcmG7shAIhb');


function enviarCorreo() {

    var formData = {
        name: document.getElementById('From_name').value,
        email: document.getElementById('From_email').value,
        message: document.getElementById('message').value
    };

    // Enviar el correo electrónico 
    emailjs.send('service_u1dme8c', 'template_6dxd4tj', formData) 
        .then(function(response) {
            console.log('Correo electrónico enviado con éxito!', response);
            alert('¡Mensaje enviado correctamente!');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.error('Error al enviar el correo electrónico:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        });
}


