const numeros = [10, 20, 30, 40];

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);


numeros.forEach(function(el) {
    console.log(el);
})


numeros.forEach(function(_, i) {
    console.log(i);
})



// function praCadaElemento() {
//      console.log('Dentro do forEach!');
//  }

// numeros.forEach(praCadaElemento);


// for(let n of numeros){
//     console.log(n);
// }


// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }


let x = 3;
let y = [];

console.log(Array.isArray(x));
console.log(Array.isArray(y));