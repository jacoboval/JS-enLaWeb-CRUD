
//  capturar lo que se capturo en el formulario
import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices
        .crearCliente(nombre, email)
        .then(() => {
            window.location.href = "/screens/registro_completado.html";
        })
        .catch((err) => console.log(err));
});

// una ves capturados, se envian a otra fincion que reciba ios datos y pasarlos al server o API -> client-serice.js


