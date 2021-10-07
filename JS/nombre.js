let pc = {

    nombre: "KevinPC",
    ram: "16gb",
    procesador: "ryzen 5 5600x" 

};

document.write(pc["nombre"]);


let num1 = prompt("Decime primer valor");
let num2 = prompt("Decime segundo valor");

num1 = parseInt(num1);
num2 = parseInt(num2);

function suma(num1,num2){

    let resultado = num1+num2;
    return document.write(resultado);
    
}

suma(num1,num2);