
//  interaccion entre JS y HTML

import { clientServices } from "../service/client-service.js";     

console.log(clientServices);


const crearNuevaLinea = (nombre, email,id) => {
   console.log(id);
    
    const linea = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button class="simple-button simple-button--delete" type="button" id="${id}">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices
            .eliminarCliente(id)
            .then((respuesta) => {
                console.log(respuesta);
            })
            .catch((err) => alert("Ocurrió un error"));
    });

    return linea;
};

//console.log("CLIENTE-SERVICE");

const table = document.querySelector("[data-table]")

//  se manda llamar clientServices
clientServices
.listaClientes()
.then((data) => {
    console.log(data);
    //  lo que sale de la promesa(response), se convierte en data
    //data.forEach((perfil) => {
    //data.forEach((perfil) => {
    data.forEach(({nombre,email,id}) => {
        //console.log(perfil);
        
        //const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        const nuevaLinea = crearNuevaLinea(nombre, email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un error"));