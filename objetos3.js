function Car(marca,modelo,anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

console.log(Car)

var micoche = new Car('Seat', 'Leon', 2020)
var otrocoche = new Car('Nissan', 'Platina', 1980)
var elotrocoche = new Car('Nissan', 'Platina', 1980)

console.log(micoche)
console.log(otrocoche)
console.log(elotrocoche)

function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad =  edad;
    this.genero = genero;
}

var maria = new Persona('Maria',20,'Mujer')
var marifer = new Persona('Maria Fernanda',27,'Mujer')

function auto(marca,modelo,anio,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.owner = owner;
}

var car54 = new auto('Seat','Cupra',2019,maria)
var car52 = new auto('VW','Bocho',2020,marifer)

car54.color = 'Azul marino'

console.log(car54)
console.log(car52)

//Tarea: Crear objeto "Casa", con objetos "Personas"

console.log("*** Tarea de la casa y personas ***")

function casa(recamara,modelo,cocina,propi){
    this.recamara = recamara;
    this.modelo = modelo;
    this.cocina = cocina;
    this.propi = propi;
}
var casa1 = new casa(3,"Londinense","integral",maria)
console.log(casa1)
