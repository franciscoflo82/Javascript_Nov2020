var miCoche = new Object()

miCoche.marca = 'Ford'
miCoche.modelo = 'Mustang'
miCoche.anio = 1970
miCoche.color = 'rojo'

//console.log(miCoche.llantas = 4)

//console.log(miCoche)

//console.log(miCoche.marca)
//console.log(miCoche['marca'])


///   **************

var objetoExe = new Object()
var cadena = 'String'
var random =  Math.random()
var obj = new Object

objetoExe.type = "Referencia a propiedades de punto"
objetoExe['fecha'] = 'Referencia a corchetes y espacios'
objetoExe[cadena] = 'Esta es referencia a una variable string'
objetoExe[random] = 'Referencia a una variable numerica'
objetoExe[obj] = 'Referencia a otro objeto'
objetoExe[''] = 'Cadena vacía'

console.log(objetoExe)

//console.log(Object.getOwnPropertyNames(objetoExe))
//console.log(Object.keys(objetoExe))

function mostrarProps(obj, objName){
    var resultado = '';
    for (var i in obj){
        if(obj.hasOwnProperty(i)){
            resultado += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    return resultado;
}
console.log(mostrarProps(objetoExe,'objetoExe'))