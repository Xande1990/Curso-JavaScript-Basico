function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
};

const d1 = criarData(24, 4, 1990);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(3, 4, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());