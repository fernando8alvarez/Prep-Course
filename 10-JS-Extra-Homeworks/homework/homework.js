// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var array = [];
   for (var clave in objeto) {
     array.push([clave,objeto[clave]]);
   }
   console.log(objeto);
   return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto = {};
  
  for (let i = 0;  i < string.length; i++) {
     if (objeto.hasOwnProperty(string[i])) {
       objeto[string[i]] = objeto[string[i]]+1;
     }else{  objeto[string[i]]=1}
  }
 console.log(objeto);
  return objeto;
}
// s o y H E N R Y
// 0 1 2 3 4 5 6 7

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var palabraMayusculas = '';
  var palabraMinusculas = '';
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      palabraMayusculas = palabraMayusculas + s[i];
    } else {
      palabraMinusculas = palabraMinusculas + s[i];
    }
  }

  return palabraMayusculas + palabraMinusculas;
}
//T h e   H e n r y   C  h  a  l  l  e  n  g  e     i  s     c  l  o  s  e  !
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var fraseArreglo = str.split(' '); //comvierte una string en arreglo recortando en el espacio entre palabras
  var fraseInversa = [];

  for (var i = 0; i < fraseArreglo.length; i++) {
    fraseInversa.push(fraseArreglo[i].split('').reverse().join(''));
  }
 
  return fraseInversa.join(' ');
 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numInver = numero.toString().split('').reverse().join('');
  var numAstring = numero.toString();

  if (numAstring === numInver) {
    return 'Es capicua';
  } else {return 'No es capicua';}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

    var arrayString = cadena.split('');
    var nuevoArray = [];

    for (let i = 0; i < arrayString.length; i++) {
      if (arrayString[i] !== 'a'&& arrayString[i] !== 'b'&& arrayString[i] !== 'c') {
             nuevoArray.push(arrayString[i]);
      }
      
    }

  console.log(nuevoArray.join(''));
  return nuevoArray.join('');
}
//  n:     3       3         9                7
//array: ["You", "are", "beautiful"     , "looking"]
//i:        0      1         2                
//j:               1         2                 3
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var nuevoArray = arr.sort(function(a,b){
    return a.length - b.length;
    /*compara y ordena en orden ascendente el largo del elemento "a" con el 
    resto de los elementos*/
  });
  
  return nuevoArray;
}

// arreglos1: [ 1, 2, 3 ]
// arreglo2: [ 1, 5, 8, 3 ]
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 

  var nuevoArreglo = [];

  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArreglo.push(arreglo1[i]);
      }
    }
  }
  return nuevoArreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

