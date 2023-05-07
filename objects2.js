var libro = { autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

var mundo = {continentes: 5, paises: 195, oceanos: 7};
for(var prop in mundo){
    console.log('Esta es la propiedad: ' + prop);
    console.log('Este es el valor: ' + mundo[prop]);
}


var mascota = {animal: 'perro', raza: 'Ovejero Aleman', amistoso: true, dueño: 'Maria Lopez',
  info: function () {
    console.log('Mi perro es un ' + this.raza);
},
}
mascota.info();  