Qué son las funciones Callback=
    Son, escencialmente, una función que se le puede pasar a otra
    como argumento y que se ejecutará después que se haya completado
    cualquier operación (de la fución que complementó).
    Normalmente, aunque no tiene que ser así, es para dar asincronía
    a una opeación, aunque no necesariamente tiene que ser así.

Aclarando conceptos=
*forEach:
    Hace exactamente lo mismo que una función --for-- es decir
    recorre cada uno de los parametros de un arreglo para operar
    con ellos, solo que es mucho más expedito y rápido hacerlo así que
    escribir tooodo el --for--(aunque vs te da el atajo también).
    Puede recibe normalmente 3 argumentos, pero solo uno es obligatorio,
    los otros son opcionales (aunque no tendría mucho sentido entonces)
        ej:
        var arr = [1,2,3,4]
        arr.forEach(funtion(elements, index, arreglo)){
            console.log(elements*2);
        }
        Se recibe esto:[2,4,6,8]

*map:
    Hace exactamente lo mismo que el --forEach-- pero es mucho
    más completo, pues el --forEach-- no te permitiría usar este
    arreglo/función dentro de otra función, en cambio el --.map-- 
    SÍ, ya que te permite "guardar" en su "memoria"
    el resultado de la operación para poder usarla más adelante, es
    decir, CREA y regresa un NUEVO arreglo con la opeación ya aplicada.
        

*.reduce:
    Esta función la usamos para que el resultado de la operación
    nos devuelva un valor único. Tiene como carácteristica que puede
    inicializar a "contar" desde la posición que se indique dentro
    del índice de nuestro arreglo, pero lo normal y más sano es 
    inicializarla desde el 0 para hacer un recorrido sin problemas.
    Vídeo explicativo a profundidad: https://www.youtube.com/watch?v=VVySn87s8Eo