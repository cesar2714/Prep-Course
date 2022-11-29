// No cambies los nombres de las funciones.

const { mayuscula } = require("../../07-JS-VI/homework/homework");

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
//nuevaMatriz.push porque quiero pushear -meter- esos elementos leidos en la nueva matriz que ya cree nuevaMatriz[], es decir, en un nuevo arreglo. Se acompaña de 
//([prop, objeto[prop]]) porque esos son los elementos que van a ser pusheados. 

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
// var objeto={};
// var desorden=string.split("").sort();
// for (let i = 0; i < desorden.length; i++) {
//   if(objeto[desorden[i]]){
//     objeto[desorden[i]]=objeto[desorden[i]]+1;
//   }else {
//     objeto[desorden[i]]=1;
//   } 
// }
// return objeto;
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
Misma explicación para el código de abajo↓ solo que el método -hasOwnProperty- es muy muy poderoso pues este hasOwnProperty() convierte a booleano para saber si el objeto tiene la propiedad especificada o no. ///// o directamente devuelve un booleano indicando si el objeto tiene la propiedad especificada, pero con eso no nos compliquemos en este problema particular////
*/
  var desAord={};
  for (let i = 0; i < string.length; i++) {
    if(desAord.hasOwnProperty(string[i])){
      desAord[string[i]]=desAord[string[i]]+1
   }else {
     desAord[string[i]]=1;
    }
  }
  return desAord;
}



function capToFront(string) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = '';
  var minus = '';
  for (let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      mayus= mayus+string[i]
    }else {
      minus= minus+string[i]
    }
  };
  return mayus + minus;
  /*
  Comenzamos estableciendo que se trata de un problema de string, donde hay mayúsculas y minúsculas, entonces hacemos variables vacías para cada una de ellas
  var mayus= ''; ←str vacio
  var minus= '';
  2- Recorremos el array desde el indice 0 string[i] y los convertimos a TODOS en mayúsculas con 
  .toUpperCase() así mayus= mayus+string[i] y
  3- hacemos lo mismo, pero esta vez a minusculas
          minus= minus+string[i]
  4- Entonces como el problema te dice que primero van las mayusculas y luego las minusculas, bueno
  así lo retorno return mayus + minus;
  */
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase= str.split(' ');
  var fraseEspejo = frase.map(function (element){
    return element.split('').reverse().join('')
  });
  return fraseEspejo.join(' ');

} 
/*
Todos los métodos que pueden ser utilizados en un str https://www.w3schools.com/js/js_string_methods.asp
1- Creamos la variable -frase- porque dice "La función recibe una frase".
2- Como -frase- es un str lo primero que tenemos que hacer es convertirla a en arreglo para comenzar a desnmarañar el problema y esto lo ahcemos con=
.split, así =str.split(' '); ... Las comillas en .split van separadas precisamente para que separe las palabras dentro del arreglo, pues si hacemos .split('') separaría pero letra por letra y eso no es lo que queremos.
2- Ya hecho esto, creamos otra variable que se llame frase espejo, que es lo que queremos conseguir con ese string y es lo que nos plantea el problema, y lo hacemos así: 
var fraseEspejo = frase.map(funtion (elemento)){
  return elemento.split('').reverse().join('')
}
3- Explicando código del punto 2
Ya habiendo convertido la variable -frase- en un array con palabras separadas, el -.map- //que lo que hace es recorrer el array que ya existe//porque toda cadena de caracteres, str, numeros implicitamente están contenido en uno, nada está flotando en el aire  - en este caso FRASE- y CREAR un nuevo array y devuelver los resultados de este segun los parámetros que le hayamos dado//
>>>>.map(function(item, index, array)<<< entonces le indicamos QUE QUEREMOS y COMO QUEREMOS que devuelva (porque si no lo hacemos devolverá cualquier cosa y eso no es lo que deseamos si queremos resolver el problema), por tanto resolvemos que:
RETORNE return los elementos (item en su sintaxis original) JUNTOS, EN REVERSA y UNIDOS de vuelta               ↓↓↓↓
   return elemento.split('').reverse().join('')
4- Hecho todo, ahora presentamos/retornamos el resultado FINAL (o console.log)
después de toda la aperación (antes del corchete amarillo) así:
    return fraseEspejo.join(' '); - así, con el 
    .join (' ')- con sus comillas sepadas para que me entregue el resultado en o por palabras separadas que es lo que buscamos.

*/

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroAlReves = numero.toString().split('').reverse().join('');
  numeroAlReves = parseInt(numeroAlReves);

  if(numero === numeroAlReves){
    return "Es capicua";
  }
  return "No es capicua";
  /*
  1- Comenzamos creando nuestra variable de referencia y sobre la cual vamos a trabajar, en este caso -numeroAlReves-
  2- En ella -numero- la convertiremos en un str para trabajar más fácil +.split('') para separar sus caracteres y aplicamos el .reverse() para voltearlos, ahora nuevamente necesitamos unirlos con .join('')
  >>> var numeroAlReves = numero.toString().split('').reverse().join(''); <<<
  3- Antes de seguir pasamos nuestra variable ya transformada -numeroAlreves- por un -parseInt- de formas de asegurar que, si por alguna razón había alguna letra, signo, o cualquier otra cosa ligada por ahí, lo deseche o convierta en un número entero. Si no hacemos esto nuestro código puede fallar, por eso es importante hacerlo.
  >>> numeroAlReves = parseInt(numeroAlReves); <<<
  quedando:

  >>> var numeroAlReves = numero.toString().split('').reverse().join('');
  numeroAlReves = parseInt(numeroAlReves); <<<

  4- Acto seguido condicionamos/booleamos nuestro problema, como se nos indica en nuestro problema.
            if(numero === numeroAlReves){
              return "Es capicua";
            }
            return "No es capicua";
  */

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = cadena.split('').filter(x=> x!=="a" && x!=="b" && x!=="c").join('');
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b) {
    return a.length - b.length; 
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion =[]; 
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i]===arreglo2[j]){
        interseccion.push(arreglo2[j]);
      }
        
    } 
  }
  return interseccion;
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

