//For

for (var i=0 ; i<3 ; i++){
    console.log("Valor: ", i)
}

var arreglo = [ 'A', 'B', 'C']
var texto = "Javascript"

console.log (arreglo.length)
console.log (texto.length)

for(var i = 0; i < arreglo.length ; i++){
    console.log("El elemento del arrego es " + arreglo[i] + " con el indice " + i)
}


// While

var cervezas = 99;
while (cervezas > 0){
    console.log("Aún hay " + cervezas + " en el refri, sigue la fiesta")
    cervezas-=1
} 