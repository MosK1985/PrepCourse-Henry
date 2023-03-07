let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



function encontrarLetraP(string) {
    let letras = string.split('');
    for(let i = 0; i < letras.length; i++) {
        if (letras[i] === 'P') {console.log('Si contiene P');
        }
    }
}



let arr1 = [];

while (arr1.length < 5) {
    arr1.push('BOOM');
}


let arr2 = [];
let n = 1;


while(n < 3) {
    arr2.push(Math.random());
}