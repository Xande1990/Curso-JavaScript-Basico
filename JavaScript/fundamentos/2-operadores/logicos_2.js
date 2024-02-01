/* Um profissional liberal agendou 2 serviços (t1, t2) durante a semana:
Terça-feira - t1
Quarta-feira - t2
TV de 50" = t1 E t2 
TV de 32" = OU t1 OU t2
Sorvete = t1 OU t2
Ficar em casa = não sorvete 
*/
const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2; // AND
console.log('Vamos comprar a TV 50"? ' + comprarTV50); 

let comprarTV32 = t1 !== t2; // XOR
console.log('Vamos comprar a TV 32"? ' + comprarTV32); 

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete"? ' + tomarSorvete); 

let ficarEmCasa = !tomarSorvete; // NOT
console.log('Vamos ficar em casa"? ' + !tomarSorvete); 