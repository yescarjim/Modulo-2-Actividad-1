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
        alert("Hubo un error inesperadp, intente más tarde");
    }
}

const cargarApi = async () => {
    try {
        const respuesta = await fetch("https://ghibliapi.vercel.app/films");
        const peliculas = await respuesta.json();
        console.log("peliculas abtenidas", peliculas)
    } catch (error) {
        console.log("Hubo un error inesperado: ", error);
        alert("Hubo un error inesperadp, intente más tarde");
    }
}


const mostrarInfo = (persona) => {
    console.log("Vamos a construir un html")
    const contenedor = document.getElementById("datos");

    contenedor.innerHTML = `
    <h2 class="miNombre">${persona.nombre}</h2>
            <p class="miEdad">Edad: ${persona.edad}</p>
            <div class="misHobbies"${persona.hobbies}
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

