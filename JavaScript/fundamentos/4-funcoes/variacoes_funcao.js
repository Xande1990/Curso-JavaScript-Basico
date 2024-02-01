// #1: Função COM Parâmetro e COM Retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(somar(30, 56));

// #2: Função COM Parâmetro e SEM Retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3: Função SEM Parâmetro e COM Retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4: Função SEM Parâmetro e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date() .getHours());
}

exibirHoraAtual();