


//Incluir el SDK de EmailJS 

emailjs.init('UThgtTzcmG7shAIhb');
 src="https://cdn.emailjs.com/dist/email.min.js"
 type="text/javascript"
    // Inicializar EmailJS con tu Public Key
    emailjs.init('UThgtTzcmG7shAIhb'); // Reemplaza 'YOUR_USER_ID' con tu Public Key

    // Función para enviar correo electrónico
    (function() {
        emailjs.init('UThgtTzcmG7shAIhb'); // Inicializar EmailJS con tu Public Key
    
        // Función para enviar correo electrónico
        function enviarCorreo() {
            // Definir los parámetros del correo electrónico
            var params = {
                to_email: 'seb.riverac@duocuc.cl', // Reemplaza con la dirección de correo electrónico a la que deseas enviar el correo
                message: 'Este es un correo de prueba enviado desde EmailJS.' // Mensaje de prueba
            };
    
            // Enviar el correo electrónico utilizando la plantilla y los parámetros definidos
            emailjs.send('service_u1dme8c', 'template_6dxd4tj', params) 
                .then(function(response) {
                    console.log('Correo electrónico enviado con éxito!', response);
                }, function(error) {
                    console.error('Error al enviar el correo electrónico:', error);
                });
        }
    
        // Llamar a la función enviarCorreo() cuando se haga clic en el botón
        document.getElementById('btnEnviarCorreo').addEventListener('click', function() {
            enviarCorreo();
        });
    })();
    