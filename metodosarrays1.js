let palabra = 'Henri';
let palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push(y);


let palabraArreglada = palabraSeparada.join('');

let numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log (num));
numeros.forEach(num => {if(num === 3)(console.log(num))})


let masUno = numeros.map((num) =>{
    return num + 1;
})

