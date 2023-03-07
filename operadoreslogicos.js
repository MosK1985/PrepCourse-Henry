function mayorYMenorYPar(num){
if(num > 5 && num < 10 && num % 2===0) console.log(true);
else console.log(false);
}


function operador(str) {
    if(str === 'Henry' || str.length<2) console.log(true);
    else console.log(false);
}


function negacion(permiso){
    if(permiso !== true) console.log("Tiene Permiso");
   
}

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}