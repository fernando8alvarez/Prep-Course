// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}

//  Suponiendo que arry es un matriz de enteros [5 , 8 , 22 , 95]
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  var nuevoArray = [];

  for (var i = 0; i < array.length; i++) {
    
        nuevoArray.push(array [i] + 1);
  }
  return nuevoArray;
}

// [5 , 6 , 8 , 9]
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push (elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift (elemento);
  return array;
}

// ['hola' , 'como' , 'estas']
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

   frase = palabras.join(' ');
   return frase;
}

// [ , 2 , 5 , 8]
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento){
    
      return true;
    }
  }
  return false;

}

// arreglo [1,5,9,8,2] var suma =0
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

var suma = 0;
for (var i = 0; i < numeros.length; i++) {
   suma = numeros[i] + suma;
}
return suma;
}

// arreglo [1,5,9,8,2] promedio = suma/numero de elementos
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

   var suma = 0;
   var promedio = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    
    suma = resultadosTest[i]+suma;

  }
  TotalNumero = resultadosTest.length;
  promedio = suma/TotalNumero;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var grande = 0;

    for (var i = 0; i < numeros.length; i++) {

        if (numeros[i] > grande) {
        grande = numeros[i];
        }
  }
  return grande;

    // OTRO METODO:
    // var grande = Math.max.apply(null,numeros);
    // console.log (grande);
  
}

// (2,6,3,9,4)
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var mult = 1;
  
  if (arguments.length === 1) {
      return arguments[0]; //si solo se coloca arguments se puede?

   } else if(arguments.length === 0){
       return 0;
   }

  for (var i = 0; i < arguments.length; i++) {
      mult = mult * arguments [i] ;
    }
  return mult;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var contar=0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18) {
      contar = contar+1;
    }
  }
  return contar;
}

//[ 1  ,  2  , 3 ,  4  , 5 , 6 , 7]
// lun   mar  mie  jue  vie sab dom
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 

if (numeroDeDia === 1 || numeroDeDia === 7) {
  return "Es fin de semana";
  
} else if(numeroDeDia>1 && numeroDeDia<7) {
  return "Es dia Laboral";

}else return;

} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString();
  if (numero [0] === "9") {
    return true;
  } else return false;
  
}

//Suponiendo un arreglo de numeros [8,8,8,8,8,8,8,8]
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

    
  for (var i = 0; i < arreglo.length-1; i++) {
    if (arreglo[i] !== arreglo[i + 1]) { //si 8 no es igual a 8 retornar falso. Se pone !=== ya que debemos encontrar al menos uno que sea diferente
      return false;
    } 
  }
  return true;
} 

//array = ['Enero','Febrero','Marzo',Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var NewArray=[];
  for (var i = 0; i < array.length; i++) {
    if (array[i]==='Enero'||array[i]==='Marzo'||array[i]==='Noviembre') {
      NewArray.push(array[i]);
    }
  }if (NewArray.includes('Enero')&&NewArray.includes('Marzo')&&NewArray.includes('Noviembre')) {
    return NewArray
  }
  else if (NewArray.length >3) {
    return "Hay meses repetidos";
  }
  else if (NewArray.length<3) {
    return "No se encontraron los meses pedidos";
  }else return NewArray;
  
}

//[0,54,120,178,199,40,76]
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var NewArray=[];
  for (var i = 0 ;i < array.length; i++) {
    if (array[i] > 100) {
      NewArray.push(array[i]);
    }
  }
  return NewArray;
}

//[2] = [4,6,8,10,12,14,16,18,20,22]
//[-4]= [-2,0,2,4,6,8,10,12,14,16]
//        1 2 3 4 5 6  7  8  9  10
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var nuevoNumero = [];
  var suma = numero;
  for (var i = 1; i < 11; i++) {
    suma = suma + 2;
    if (suma === i) {
      break; // el break lo que hace es cortartar la ejecucion del ciclo for
    } else {
      nuevoNumero.push(suma);
    }
  }
  if (nuevoNumero.length === 10) {
    return nuevoNumero;
  } else if (nuevoNumero.length < 11) {
    return 'Se interrumpió la ejecución';
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var arreglo = [];
  var suma = numero;
  for (var i = 1; i < 11; i++) {
    if (i === 5) {
      continue;
    } else {
      suma = suma +2;
      arreglo.push(suma);
    }
  }
  return arreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
