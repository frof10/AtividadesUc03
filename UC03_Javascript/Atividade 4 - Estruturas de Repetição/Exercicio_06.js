import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome = prompt('Digite o seu nome: ');
let salario = Number(prompt(`Sr(a) ${nome}, Digite o seu salário mensal: `));

while (isNaN(salario) || salario <= 0) {
    salario = Number(prompt(`Valor inválido. Sr(a) ${nome}, digite um salário válido: `));
}

let totalGastos = 0;
let maiorGasto = 0;
let menorGasto = 0;
let diaMaior = 0;
let diaMenor = 0;

for (let i = 1; i <= 30; i++) {
    let gasto = Number(prompt(`Digite o gasto do dia ${i}: `));

    while (isNaN(gasto) || gasto < 0) {
        gasto = Number(prompt(`Valor inválido. Digite novamente o gasto do dia ${i}: `));
    }

    totalGastos += gasto;

    if (i === 1) {
        maiorGasto = gasto;
        menorGasto = gasto;
        diaMaior = i;
        diaMenor = i;
    }

    if (gasto > maiorGasto) {
        maiorGasto = gasto;
        diaMaior = i;
    }

    if (gasto < menorGasto) {
        menorGasto = gasto;
        diaMenor = i;
    }
}

console.log("\n--- RELATÓRIO MENSAL DE GASTOS ---");
console.log(`Nome: ${nome}`);
console.log(`Salário: R$ ${salario.toFixed(2)}`);
console.log(`Total de gastos: R$ ${totalGastos.toFixed(2)}`);

if (totalGastos > salario) {
    console.log("Situação: Você gastou mais do que o seu salário! 💸");
} else if (totalGastos === salario) {
    console.log("Situação: Você gastou exatamente o valor do seu salário.");
} else {
    let economia = salario - totalGastos;
    console.log(`Situação: Parabéns! Você economizou R$ ${economia.toFixed(2)}`);
}

console.log(`Dia de MAIOR gasto: Dia ${diaMaior} com R$ ${maiorGasto.toFixed(2)}`);
console.log(`Dia de MENOR gasto: Dia ${diaMenor} com R$ ${menorGasto.toFixed(2)}`);
