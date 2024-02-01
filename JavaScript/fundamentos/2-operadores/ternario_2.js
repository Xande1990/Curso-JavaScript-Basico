const hora = 23;
const sudacao = 
    hora <= 11 
        ? "Bom dia" :
        hora <= 17 ?
            "Boa tarde" : "Boa noite";  
            
//ou
//const sudacao = hora <= 11 ? "Bom dia" : hora <= 17 ? "Boa tarde" : "Boa noite"; 
            
console.log(sudacao);

