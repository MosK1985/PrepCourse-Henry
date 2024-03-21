let colores = ['amarillo', 'azul'];
colores.push('rojo');
colores.unshift('verde');
colores.pop();
colores.shift();



// INCLUDES
 let pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
 let incluyeDali = pintores.includes('Dali');

// EVERY
 let numeros1 = [1, 6, 8, 9];
 let cumplenCondicion = numeros.every((num) => {return num > 5})


// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);


// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);


// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )


// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);