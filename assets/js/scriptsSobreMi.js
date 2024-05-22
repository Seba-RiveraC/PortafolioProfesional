  // funcion para obtener datos del usuario

  function obtenerDatosUsuario(username){

    const url = `https://api.github.com/users/${username}` 


    // solicitud de tipo GET con FETCH, solicitud de tipo ajax

    fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data)

        // actualizar el contenido de html con los datos del susuario
        document.getElementById("Nombre").textContent = data.name;
        document.getElementById("Bio").textContent = data.bio;
        document.getElementById("Seguidores").textContent = data.followers;
        document.getElementById("Repositorios").textContent = data.public_repos;
    });

    
    
};

obtenerDatosUsuario('Seba-RiveraC');