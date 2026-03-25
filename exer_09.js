function ordenador() {

let var1 = 0;
let var2 = 0;

var1 = Number(prompt("Digite o valor da variável 1"));
var2 = Number(prompt("Digite o valor da variável 2"));

if (var1 > var2) {
    console.log("A variável 1 é maior que a variável 2");
} else if (var2 > var1) {
    console.log("A variável 2 é maior que a variável 1");
} else {
    alert("As variáveis são iguais");
}

}