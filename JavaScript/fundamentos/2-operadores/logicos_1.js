// Saber se a pessoa vai para o shopping
let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = true;

// 1ª condição - tem dinheiro e o dia está ensolarado
let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado; // && -> (E)
console.log(resultadoE);

// 2ª condição - o dia está ensolarado ou o carro está na garagem
let resultadoOU = '#2 (OR) - Vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem; // || -> (OU)
console.log(resultadoOU);

// Tabela verdade do != -> (OU exclusivo)  
// obs: console.log(true ^ true); -> (^) é usado como (OU exclusivo) para operações com binários (0,1)
console.log(true !== true); 
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

// operadores unários (! -> negação)
console.log('Não verdadeiro: ' + !true); 
console.log('Não false: ' + !false);