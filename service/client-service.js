//  comunicacion con el servidor , recibir la respuesta 

const listaClientes = () =>
    fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};
/*
[08:40] Debería de ser la misma URL: http://localhost:3000/perfil pero ahora, si recuerdas, te comenté que por defecto si nosotros no le definimos el método con el que tiene que trabajar fetch, va a utilizar GET. Vamos a ver entonces cómo es que podemos decir la fetch que trabaje con otro método.

[09:07] Primero va a recibir la URL a la cual se va a conectar y después va a recibir un segundo parámetro, que va a ser un objeto. En este objeto vamos a definir las demás propiedades de la llamada. Nosotros vamos a decir aquí cuál va a ser el método o method: En este caso recuerda, en el CRUD para poder crear un nuevo recurso, vamos a utilizar el método POST.

[09:33] Entonces vamos a poner que queremos que sea POST. Después, dentro de este mismo objeto, vamos a definirle los encabezados. Estos encabezados es solo como para tener un estándar o que el servidor sepa qué tipo de archivo es el que va a recibir. Lo que nosotros vamos a poner entonces es headers y va a ser un nuevo objeto, y dentro de este objeto, vamos a definir el Content-Type. A este Content-Type le vamos a decir que va a ser un "application/json".

[10:08] Muy bien. Por último le vamos a definir también cuál va a ser el body o el cuerpo, que al final de cuenta termina siendo un objeto. En este objeto es donde nosotros vamos a poner toda la información que nosotros queremos que se envíe a través del cuerpo de la petición. Entonces vamos a poner que queremos el nombre y el correo electrónico. La comunicación http trabaja con texto, lo que necesitamos ahora es transformar este objeto en texto.

[01:48] ¿Cómo lo hacemos? Utilizando JSON.stringify y vamos a abrir un paréntesis y cerrar otro paréntesis. Entonces. lo que le estamos mandando aquí ya es un objeto, pero JSON.stringify se va a encargar de formatearlo en texto para que lo pueda enviar http.
*/

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};

const detalleCliente =(id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};

const actualizarCliente = (nombre,email,id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify( {nombre,email} ),
    })
      //.then((respuesta) => console.log(respuesta))
      .then((respuesta) =>respuesta)      
      .catch((err) => console.log(err));
};


export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
    
};

/*  
Se cambia la referencia de archivo en:
    < script src = "../service/client-service.js" ></script> 
del fichero : lista_cliente.html

*/






