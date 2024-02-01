
// Exemplo do calculo de IMC
var peso = 77; // => peso em kg
var altura = 1.77; // => altura em metros (m)

function obterStatusImc(imc) {
    if(imc > 0 && imc <= 18.5) {
        console.log('Magreza!');
    }
        if(imc >= 18.5 && imc <= 24.9) {
            console.log('Normal!');
        }
            if(imc >= 24.9 && imc <= 30) {
                console.log('Sobrepeso!');    
            }                           
                if(imc > 30) {
                    console.log('Obesidade!');
                }      
}




// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
var imc = calcularIMC(peso, altura);

// Exibição do resultado
console.log("O IMC é: " + imc);

obterStatusImc(imc);



