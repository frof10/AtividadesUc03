import PromptSync from "prompt-sync";
const prompt = PromptSync();


let atletas = []; 
let notas = [];   


let quantidadeAtletas = Number(prompt("Digite o número de atletas: "));

while (isNaN(quantidadeAtletas) || quantidadeAtletas <= 0) {
    quantidadeAtletas = Number(prompt("Valor inválido. Digite novamente o número de atletas: "));
}


for (let i = 0; i < quantidadeAtletas; i++) {
    let nome = prompt(`\nNome do atleta ${i + 1}: `);
    notas = []; 

    for (let j = 0; j < 7; j++) {
        let nota = Number(prompt(`Nota ${j + 1} do jurado: `));

        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = Number(prompt(`Nota inválida. Digite novamente a nota ${j + 1}: `));
        }

        notas.push(nota);
    }

    
    let notasOrdenadas = [...notas];
    notasOrdenadas.sort((a, b) => a - b);

    
    notasOrdenadas.shift(); // menor
    notasOrdenadas.pop();   // maior

    
    let soma = 0;
    for (let n of notasOrdenadas) {
        soma += n;
    }

    let media = soma / notasOrdenadas.length;

    
    atletas.push({
        nome: nome,
        notasOriginais: [...notas],
        media: media
    });
}


atletas.sort((a, b) => b.media - a.media);


console.log("\n===== RESULTADO FINAL =====");

for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    console.log(`\nAtleta: ${atleta.nome}`);
    console.log(`Notas: ${atleta.notasOriginais.join(", ")}`);
    console.log(`Média (sem maior e menor): ${atleta.media.toFixed(2)}`);
}


let vencedor = atletas[0];
console.log("\n VENCEDOR ");
console.log(`Nome: ${vencedor.nome}`);
console.log(`Média: ${vencedor.media.toFixed(2)}`);
