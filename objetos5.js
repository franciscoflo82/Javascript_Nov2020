function displayCar(){
    var impresion = `Un coche ${this.year} ${this.modelo} a la venta, dueña ${this.owner.nombre}`
    console.log(impresion)
}

function carrito(marca,modelo,year,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
}

function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad =  edad;
    this.genero = genero;
}

var maria = new Persona('Maria',20,'Mujer')


var car12 = new carrito('Audi','A3',2015, maria )
car12.displayCar();
console.log(car12.owner.edad)
