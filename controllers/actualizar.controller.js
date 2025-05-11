
import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]")

//  async functiom 
//const obtenerInformacion = async () => {
const obtenerInformacion = async() =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    if(id === null ){
        window.location.href  = "/screens/actualizerror.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    const perfil = await clientServices.detalleCliente(id)
    nombre.value = perfil.nombre;
    email.value = perfil.email;        
};


/*
Vamos a recibir aquí nuestro evento y si recuerdas nosotros preveníamos el 
funcionamiento normal de un formulario. Era esto con evento.preventDefault. 
*/
obtenerInformacion();
formulario.addEventListener("submit", (eveent)=>{
    event.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    //obtener valor de inputs
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, " " , email);
    clientServices.actualizarCliente(nombre,email,id).then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    });
});
