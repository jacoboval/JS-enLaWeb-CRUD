//  comunicacion con el servidor , recibir la respuesta 

const listaClientes = () => {    
    return fetch("http://localhost:3000/perfil").then((resuesta) => resuesta.json());
};

export const clientServices = {
    listaClientes,

};

/*  
Se cambia la referencia de archivo en:
    < script src = "../service/client-service.js" ></script> 
del fichero : lista_cliente.html

*/






