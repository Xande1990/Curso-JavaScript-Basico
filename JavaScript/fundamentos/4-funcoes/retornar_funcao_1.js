function retornarUmaFuncao() {

    function bomDia() {
        return "Bom dia!!!"
    }

    return bomDia;
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());

const umaFuncao = retornarUmaFuncao();
console.log(umaFuncao());