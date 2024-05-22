
  function obtenerDatosUsuario(username){

    const url = `https://api.github.com/users/${username}` 



    fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data)

        document.getElementById("Nombre").textContent = data.name;
        document.getElementById("Bio").textContent = data.bio;
        document.getElementById("Seguidores").textContent = data.followers;
        document.getElementById("Repositorios").textContent = data.public_repos;
    });

    
    
};

obtenerDatosUsuario('Seba-RiveraC');