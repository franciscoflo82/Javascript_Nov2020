var persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
      console.log(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function() {
      console.log('Hola, Soy '+ this.nombre[0] + '. ');
    }
  };

persona.saludo()
persona.bio()
console.log("Interes", persona.intereses[1])

persona.despedida = function(){ 
    console.log("¡Adiós a todos!"); 
}

persona.despedida()