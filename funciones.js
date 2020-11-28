const { Console } = require("console")

function suma(num1,num2){
    return num1+num2
}
//console.log(suma(4,5))

function cuadrado(a){
    return a * a
}
//console.log(cuadrado(4,5))

function myName (name){
    return "¡Hola " + name + "!"
}

//console.log(myName("Tania"))

//1. Saber si un numero es par o inpar
//2. Cambiar el orden de un array {3,2,1} output {1,2,3}  (*)
//3. Threecompany input: asd output: aaasssddd
//4. Palindromo "ana", "oso", "casa"

function parImpar(a){
    if(a % 2 == 0){
        return "Es un numero par"
    }else{
        return "No es un numero par"
    }

}
/*
console.log(parImpar(4))
console.log(parImpar(8))
console.log(parImpar(-3))
console.log(parImpar(0))
*/

//Tarea: Encontrar numero impares y pares en los numeros del 0 al 100
console.log("*** Tarea números pares e impares: ***")

for (var i=0 ; i<101 ; i++ ){
    console.log("El número ", i, parImpar(i))
        
}





//2. Cambiar el orden de un array {3,2,1} output {1,2,3}  (*)

function changeArray(elements){
    var longitud = elements.length
    var newArray = []
    for(var i = 0 ;i < (longitud - 1); i++ ){
        console.log(elements[i])
        newArray.unshift(elements[i])
        console.log("Variable: ", i)
    }
    return newArray
}

var array = [3,17,'Casa',1,50,true,11]
console.log(changeArray(array))

//console.log(changeArray(array))

// Tarea resolver invertir un array con un solo arreglo
/*
reverse(), modifica un array colocando sus elementos en el orden inverso a su posición original:

var array = [1, 2, 3];
array.reverse();
// ahora array = [3, 2, 1]

*/
console.log("*** Tarea de invertir el array")
console.log(array)
console.log(array.reverse())


//3. Threecompany input: asd output: aaasssddd
/*
    asd aaasssddd
    yu  yyyuuu
    r   rrr
*/
 function three(cadena){
    var n = cadena.length
    var output = ""

    for(var i=0; i<n; i++){
        var letra =cadena.charAt(i);
        output =  output + letra + letra + letra
    }
    return output
 }

console.log(three('casa'))
console.log(three('resa'))
console.log(three('yu'))

//TAREA: Palindromo "ana", "oso", "casa"

/*
input   output
casa    No es un palindromo
oso     Si es un palindromo
ana     Si es un palindromo
*/
console.log("*** Tarea palindromo ***")
var e="casa";
var f="oso";
var g="ana";


function palindro(z){
    var w;
    w = z.split('')
    w.reverse()
    if(z==w){
        console.log("es un palíndromo")
    }
    else{
        console.log("no es un palindromo")
    }
}

console.log("la palabra ",e, palindro(e))
console.log("la palabra ",f, palindro(f))
console.log("la palabra ",g, palindro(g))


/


/*Tarea: Crear una funcion que regrese la siguente cadena
input       output
Marcia      una manzana para Marcia y una manzana para mi
Paco        una manzana para Paco y una manzana para mi
""          una manzana para ti y una manzana para mi
*/

console.log("*** tarea de las manzanas ***")

var Mar="Marcia"
var Pac="Paco"
var Ti= ""

console.log(manzana(Mar))
console.log(manzana(Pac))
console.log(manzana(Ti))

function manzana(d){
        if (d==""){
        d="ti"
    }
    console.log("Una manzana para ", d, "y una manzana para mi.")

}