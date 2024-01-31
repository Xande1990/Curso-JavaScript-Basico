const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice(1, 2); // numeros.splice -> exclui um elemento no arrays
console.log(numeros);

numeros.pop(numeros); // numeros.pop -> remove o ultimo elemento do arrays

console.log(numeros.pop()); // -> exclui e mostra o elemento que foi excluido
console.log(numeros.pop());
console.log(numeros)


