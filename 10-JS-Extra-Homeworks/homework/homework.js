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
  var nuevaMatriz = [];
  for(prop in objeto){
    nuevaMatriz.push([prop, objeto[prop]]);
  }
  return nuevaMatriz;
}
// for(prop in objeto) recorre todo el objeto leyendo sus propiedades.
//nuevaMatriz.push porque quiero pushear -meter- esos elementos leidos en una nueva matriz, es decir, en un nuevo arreglo. Se acompaña de 
//([prop, objeto[prop]]) porque esos son los elementos que van a ser pusheados. 

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var objeto={};
var desorden=string.split("").sort();
for (let i = 0; i < desorden.length; i++) {
  if(objeto[desorden[i]]){
    objeto[desorden[i]]=objeto[desorden[i]]+1;
  }else {
    objeto[desorden[i]]=1;
  } 
}
return objeto;
/*Creo el objeto
2.- Al desorden lo separo con .split('')
y lo ordeno con .sort()
3.- Recorro el desorden con el -for-
4.- Con el condicional -if- establezco
lo que voy a preguntarme/reflexionar
Primero establezco QUÉ: (objeto[desorden[i]]) es decir, el *desorden dentro del indice del objeto>>>>>> y establezco
opero al abrir llaves {}
4.1.- que Si * se repite más de 1 vez, entonces vaya sumándolos cada vez de a uno
4.2 SI NO que los deje igual. (ya con el valor/tantas veces/ que les haya encontrado -por eso el =1)
Misma explicación para el código de abajo↓
*/
//   var pares={};
//   for (let i = 0; i < string.length; i++) {
//     if(pares.hasOwnProperty(string[i])){
//       pares[string[i]]=pares[string[i]]+1
//    }else {
//      pares[string[i]]=1;
//     }
//   }
//   return pares;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
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

