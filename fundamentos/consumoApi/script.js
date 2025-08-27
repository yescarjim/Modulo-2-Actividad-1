//Estandar -> ECMASScripts -ECMAS6-2015
//Manejo de errores - try-catch


/*constbtnInfo = document.getElementById("btn-Info")
btnInfo.addEventLister("click", cargarInformacion)
*/

const cargarInformacion = async () => {


    try {
        const respuesta = await fetch("../json/persona.json");
        const persona = await respuesta.json();
        console.log("persona obtenida", persona);
        mostrarInfo(persona);
    } catch (error) {
        console.log("Hubo un error inesperado: ", error);
        alert("Hubo un error inesperado, intente más tarde");
    }
}

const cargarApi = async () => {
    try {
        const respuesta = await fetch("https://dragonball-api.com/api/characters/");
        const imagenes = await respuesta.json();
        console.log("imagenes obtenidas", imagenes);
        mostrarPersonajes(imagenes.items);    
    } catch (error) {
        console.log("Hubo un error inesperado: ", error);
        alert("Hubo un error inesperado, intente más tarde");
    }
}



const mostrarInfo = (persona) => {
    console.log("Vamos a construir un html")
    const contenedor = document.getElementById("datos");

    contenedor.innerHTML = `
    <h2 class="miNombre">${persona.nombre}</h2>
            <p class="miEdad">Edad: ${persona.edad}></p>
            <div class="misHobbies"${persona.hobbies}>
                <h3>Hobbies</h3>
                <ul>
                <li>${persona.hobbies[0]}</li>
                <li>${persona.hobbies[1]}</li>
                <li>${persona.hobbies[2]}</li>
                <li>${persona.hobbies[3]}</li>
                </ul>
            </div>
    `
}

const mostrarPersonajes = (personajes) => {
    const contenedor = document.getElementById("datos");
    
    let html = '<h2 class="titulo-personajes">Personajes de Dragon Ball</h2><div class="personajes-grid">';
    
    personajes.forEach(personaje => {
        html += `
            <div class="personaje-card">
                <img src="${personaje.image}" alt="${personaje.name}">
                <h3>${personaje.name}</h3>
                <p><strong>Raza:</strong> ${personaje.race}</p>
                <p><strong>Ki:</strong> ${personaje.ki}</p>
                <p><strong>Género:</strong> ${personaje.gender}</p>
            </div>
        `;
    });
    
    html += '</div>';
    contenedor.innerHTML = html;
}

