function decrescente() {

let num = []

for (let i = 0; i < 4; i++){
num.push(Number(prompt("Digite um número")));

}

num.sort((a,b) => b - a);

alert.log("Ordem decrescente: " + num);

}