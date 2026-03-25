function variavel(){

let bruto = 0;
let taxa = 0;
let desconto = 0;
let liquido = 0;

bruto = Number(prompt("Digite seu salário bruto"));

if (bruto <= 1000) {
    taxa = bruto * 0.08;
    desconto = 8;
}else if (bruto <= 1500) {
    taxa = bruto * 0.085;
    desconto = 8.5;
}else {
    taxa = bruto * 0.09;
    desconto = 9;
}

liquido = bruto - taxa;

console.log("Seu salário bruto é: " + bruto);
console.log("A taxa de desconto é: " + taxa + "%");
console.log("O valor descontado é: " + desconto);
console.log("Seu salário líquido é: " + liquido);

}
