function atribuidor(){

let var1 = 0;
let var2 = 0;

var1 = Number(prompt("Digite o valor da variável 1"));
var2 = Number(prompt("Digite o valor da variável 2"));

dif = 0;
som = 0;
mult = 0;

dif = var1 - var2;
mult = var1 * var2;

som = (var1*2 + var2*3);

console.log("A diferença entre as variáveis é: " + dif);
console.log("A multiplicação entre as variáveis é: " + mult);
console.log("A soma ponderada entre as variáveis é: " + som);

}