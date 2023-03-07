function viajar (destino) {
     if (destino === 'Brasil') {
        console.log('gire a la izquierda');
     } else  if (destino === 'Argentina') {
        console.log('gire a la derecha');
     }
}

viajar('Argentina');



function puedeManejar (edad) { 
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
    
}

puedeManejar (18);