// Data (dia/mes/ano)
// Atributos: dia, mes e ano
// Método: exibir -> "dia/mes/ano"

const nascimento = {
    dia: 24,
    mes: 4,
    ano: 1990,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(nascimento.exibir());