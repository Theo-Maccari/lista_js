function pagamento(){

let nome = "";
let bruto = 0;
let taxa = 0;
let liquido = 0;

nome = prompt("Digite seu nome");
bruto = Number(prompt("Digite seu salário bruto"));

taxa = bruto * 0.08;
liquido = bruto - taxa;

console.log("Seu nome é: " + nome);
console.log("Seu salário bruto é: " + bruto);
console.log("O valor descontado é: " + taxa);
console.log("Seu salário líquido é: " + liquido);

}