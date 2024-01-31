function executar(param) {
    if(typeof param === "function") {
        console.log(param());
    }
}

function bomDia() {
    return "Bom dia";
}

executar(3);
executar(bomDia);

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);