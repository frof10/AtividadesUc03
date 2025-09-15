import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valor;

while(true){
 valor = Number(prompt("Digite o valor do saque (entre 10 e 1000): "));
    if(valor < 10 || valor >= 1001){
        console.log('Valor invalido, Digite novamente!')
        continue;
    }break;
}
 let notas100 = 0; 
 let notas50 = 0;
 let notas20 = 0;
 let notas10 = 0;
 let notas5 =0;
 let notas2 = 0;

 let restante = valor;

if (restante >= 100) {
    notas100 = Math.floor(restante / 100);
    restante = restante - (notas100 * 100);
}

if (restante >= 50) {
    notas50 = Math.floor(restante / 50);
    restante = restante - (notas50 * 50);
}

if (restante >= 20) {
    notas20 = Math.floor(restante / 20);
    restante = restante - (notas20 * 20);
}

if (restante >= 10) {
    notas10 = Math.floor(restante / 10);
    restante = restante - (notas10 * 10);
}

if (restante >= 5) {
    notas5 = Math.floor(restante / 5);
    restante = restante - (notas5 * 5);
}

if (restante >= 2) {
    notas2 = Math.floor(restante / 2);
    restante = restante - (notas2 * 2);
}

if (restante !== 0) {
    console.log("Não é possível sacar exatamente R$" + valor + " com as notas disponíveis.");
    console.log("Tente outro valor.");
} else {
    console.log(`Saque de R$${valor} realizado com:`);
    if (notas100 > 0) console.log("Notas de R$100: " + notas100);
    if (notas50 > 0) console.log("Notas de R$50: " + notas50);
    if (notas20 > 0) console.log("Notas de R$20: " + notas20);
    if (notas10 > 0) console.log("Notas de R$10: " + notas10);
    if (notas5 > 0) console.log("Notas de R$5: " + notas5);
    if (notas2 > 0) console.log("Notas de R$2: " + notas2);
}
