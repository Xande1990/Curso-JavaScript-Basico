let a = 1;
let b = 2;

//evitar escrever código confuso
console.log(++a === b++); // ++a tem prioridade depois a igualdade e por último o b++
console.log(a++ === b++);
console.log(a === b);

// exeplo de código claro:
a++;
console.log(a === b);
b++;


/* a + b -> infix (obs: a + b é um operador binário)
   ++a -> prefix
   a++ -> postfix
*/