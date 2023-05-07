// Forma de sintaxis: funcion constructora



function Auto(puertas,color,marca,año,ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;        



    this.informacion = function () {
        console.log('Este es un ' + this.marca + 'de color' + this.color);
    }
}

var miPrimerAuto = new Auto(2, 'Azul', 'Pagani', 2023, 4);

miPrimerAuto.informacion();

// Forma de sintaxis: expresion de clase


class Auto{
    constructor(puertas,color,marca,año,ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;        
    
    }
     informacion() {
        console.log('Este es un ' + this.marca + 'de color' + this.color);
     }
}

var elSegundoAuto = new Auto(4, 'blanco', 'Ford', 2023, 4);

// this ejemplo

class Football {
    constructor(jugador) {
        this.jugador = jugador;
    }

    obtenerNombre() {
        console.log(this.jugador);
    }
}

var argentina = new Football('Messi');
var brasil = new Football('Pele');


argentina.obtenerNombre();
brasil.obtenerNombre();

