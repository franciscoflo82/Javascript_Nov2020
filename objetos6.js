const Manager = {
    name:'Guillermo',
    company:'Telefonica',
    edad:32,
    job:'Softwara Engineer'
}

const Interno = {
    name:'Paco',
    edad:21,
    job:'Ir por los cafes del Starbuks'
}

function sayHi(){
    console.log('Hola, mi nombre es ',this.name)
}

function miEdad(){
    console.log('Tengo ', this.edad ,'años')
}

Manager.sayHi = sayHi;
Manager.miEdad = miEdad;
Interno.sayHi = sayHi;

Manager.sayHi()
Manager.miEdad()
Interno.sayHi()

console.log(Manager.salario)
