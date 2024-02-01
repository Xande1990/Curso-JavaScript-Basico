const hora = 23;
let saudacao;

//a maioria dos desenvolvedores preferem o código escrito assim
if (hora < 12) {
    saudacao = 'Bom dia!';
} else if (hora < 18) {
        saudacao = 'Boa tarde!';
    } else if(hora < 22) {
    saudacao = 'Boa noite!';
    } else {
        saudacao = 'Muito tarde!';
        }

console.log(saudacao);