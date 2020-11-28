//OPERADORES

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

console.log("La suma de ", a, "+", b," es igual a: " +(a+b))
console.log("La resta de ", e, "-", d," es igual a: " +(e-d))
console.log("La multiplicación de ", c, "*", d, " es igual a: " +(c*d))
console.log("La división de ", d, "/", b," es igual a: " +(d/b))
console.log("El residuo de ", c, "/", b," es igual a: " +(c%b))

//concatenación de cadenas o strings
console.log("súper cadena ", 1234 + "9")
console.log("súper Cadena 1 " + "súper Cadena 2")


//ejemplo que puso Yuri

const cinco = 5
const diez = 10
console.log("Quince es " + (cinco + diez) + ' y  no ' + (2 * diez + 5) +'.')

//*** Tarea ***

var num = 8
num = num / 2

console.log(num)
num = 8
console.log(num /= 2)
//Usemos los siguentes operadores con ejemplos
/*
/=
*=
-=
+=
%=
*/


var tarea = 10
tarea = tarea / 2
console.log(tarea)
tarea = 10
console.log("*** TAREA ***")
console.log("uso abreviado división: ", tarea /= 2)
tarea = 10
console.log("uso abreviado multiplicación: ", tarea *= 2)
tarea = 10
console.log("uso abreviado resta: ", tarea -= 2)
tarea = 10
console.log("uso abreviado suma: ", tarea += 2)
tarea = 10
console.log("uso abreviado residuo: ", tarea %= 2)