var texto;
texto = "Servidor On"

if (texto == 'Servidor Off'){
    console.log("Test pass")
}
else {
    console.log ("Test fail")
}

var num = 48
if (num == 50){
    console.log("Valor: ", num)
    console.log("Numero menor")
}

//Tarea  Investigar las diferencias entre " =, ==, ==="
/* 
=    de asignación
==   compara si los dos operandos son iguales o no y retorna un true o false
===  estrictamente iguales e incluso del mismo tipo

FUENTE:  https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

*/


var num2 = 48
var foo = 7
var bar = 5

if (num <= num2 && foo > bar){
    console.log("Pass and")
}

if (num < num2 || foo > bar){
    console.log("Pass OR")
}

// ejemplo con If con un FALSE

var notTrue = false;

if (!notTrue){
    console.log("El valor es: " + notTrue)
}

if (notTrue){
    console.log("El valor es: " + notTrue)
}

// Ejemplo Switch

var rango = "Coronel"

switch(rango){
    case "Soldado Razo":
        console.log("No autorizado")
    case "Comandante":
        console.log("Necesita autorización")
    case "Capitan":
        console.log("Autorización requerida")
    case "General":
        console.log("Usuario Autorizado")
    default:
        console.log("Respuesta default: Usuario no autorizado")
        break;
}

var opciones = 43

switch(this.opciones){
    case '2':
        console.log("No autorizado")
        break;
    case '43':
        console.log("Necesita autorización")
        break;
    case '54':
        console.log("Autorización requerida")
        break;
    default:
        console.log("Respuesta default: Usuario no autorizado")
        break;
}

var dealer = 4
var x = this.dealer;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x < 9):
        console.log("between 5 and 8");
        break;
    case (x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("none");
        break;
}

// Tarea: Investigar/hacer un ejemplo un switch con números
console.log("*** TAREA ***");
var supervar = 3
switch (supervar) {
    case supervar < 5:
        console.log("supervar es menor que 5");
        break;
    case (supervar == 5 && supervar < 9):
        console.log("supervar esta entre 5 y 8");
        break;
    case (supervar == 9 && supervar < 12):
        console.log("supervar esta entre 9 y 11");
        break;
    default:
        console.log("supervar no se ha podido especificar");
        break;
}


/* Tarea 
Ejercicio
En este ejercicio, debe construir un if dentro de la instrucción 
de la función checkNumber que verifica si el número myNumber 
es igual a 42. 
Si ese es el caso, la función debe imprimir usando console.log 
la palabra 'correcta'. 
Si myNumber no es igual a 42, la función debe imprimirse 
usando console.log la palabra incorrecta. 
Puede nombrar el argumento pasado a una función 
proporcionando el nombre entre paréntesis. 
Por ejemplo, función myFunction (myArgument).
*/

/******TAREA 2 */
console.log("*** TAREA2 ***")

function checkNumber (myNumber){
    if (myNumber==42){
        return("¡CORRECTA!  :D ")
    }
    else {
        return("INCORRECTA :( ")
    }
}
console.log(checkNumber(42))



//Ejercicio que hizo Yuri

function myFunction (myArgument1, myArgument2){
    return (myArgument1 + myArgument2)
}

console.log(myFunction(5,8))
