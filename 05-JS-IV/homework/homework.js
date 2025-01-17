// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    
  }
  objeto.edad = edad;
  objeto.meow = function meow() {
    return "Meow!";
  } 
  return objeto;
  objeto.meow(); // para llamar al metodo

}
// el argumento "objeto" es un objeto.
// el argumento "property" es una cadena string con el nombre de la propiedad.
function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null; // con el braket notation tomara solo el valor de esa variable, es decir var property = 'string', y string es el nombre de una propiedad del objeto
  return objeto;

}
// var metodo = "nombre de un metodo"
function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
objeto[metodo](); //[metodo] hace referencia al nombre del metodo y con () invocamos el metodo (funcion) ya teniendo su nombre
// ¿se puede usar el dot notation?
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

   var producto = objetoMisterioso.numeroMisterioso * 5; //dot notation
  // OTRA FORMA: var producto = objetoMisterioso['numeroMisterioso'] * 5 //braket notation
  return producto;

}
// el parametro "objeto" es un objeto
// var unaPropiedad = 'nombre de la propiedad';
function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

   delete objeto[unaPropiedad]; // bracket notation. no usa comillas porque no sabemos directamente el nombre de la propiedad, sino que "unaPropiedad" nos da el nombre.
  // delete objeto.unaPropiedad;
   return objeto;
}
// var nombre = 'Jose';
// var email = 'loquesea@gmail.com";
// var passwird = 1234;
function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var nuevoObjeto = {
    nombre: nombre,
    email: email,
    password: password

  };
  return nuevoObjeto;

}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  if (usuario.email) { //Si la propiedad esta definidad (es decir tiene un valor) returna "true" si no "false"
    //OTRA MANERA: if(usuario.email != null || usuario.email != undefined)
    return true;
  }else return false;
}
// var propiedad = 'nombredepropiedad';
function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) { 
    
     return true
  }else return false;
// OTRA MANERA:return objeto.hasOwnPropeerty(propiedad);
// OTRA MANERA:
  //  for (const clave in objeto) {
  //    if (clave === propiedad) {
  //      return true;
  //    }
  //    return false;
  //  }
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:

    if (password === usuario.password) {
      return true;
    } 
    return false;
    //OTRO METODO: return usuario['password'] === password;

  }

//usuario.contraseña: es la propiedad contraseña
//var nuevagPassword = 'hola1234'
function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}
// usuario es un objeto
//amigos:[carlos,jose,maria] es una propiedad array
// var nuevoAmigo = ana;
function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
   usuario.amigos.push(nuevoAmigo);
   return usuario;

}
/* var usuarios = [
  usuario = {esPremium:value},
  usuario = {esPremium:value},
  usurios = {esPremium:value}
 ] */
function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}
/* var usuario = {
  posts:[post={likes:entero},
        post={likes:entero},
        post={likes:entero}]
  }*/
function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0;
for (let i = 0; i < usuario.posts.length; i++) {
  
suma = suma + usuario.posts[i].likes;

}
return suma;


}
/* var producto ={
   precio: 80;
   porcentajeDeDescuento: 0.1;
   calcularPrecioDescuento: function multiplicar(){
  
   }
} */
function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

 producto.calcularPrecioDescuento = function descuento() {
  return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
  // OTRO METODO: return this.precio - (this.precio * this.porcentajeDeDescuento);
 }
return producto;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
