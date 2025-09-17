import PromptSync from "prompt-sync";
const prompt = PromptSync();

let cidades = [
    { nome: "Natal", estado: "RN", veiculos: 250000, acidentes: 1200 },
    { nome: "Parnamirim", estado: "RN", veiculos: 80000, acidentes: 300 },
    { nome: "São Gonçalo do Amarante", estado: "RN", veiculos: 60000, acidentes: 200 },
    { nome: "Recife", estado: "PE", veiculos: 400000, acidentes: 1800 },
    { nome: "Olinda", estado: "PE", veiculos: 120000, acidentes: 500 },
    { nome: "Jaboatão dos Guararapes", estado: "PE", veiculos: 300000, acidentes: 900 },
    { nome: "João Pessoa", estado: "PB", veiculos: 300000, acidentes: 900 },
    { nome: "Campina Grande", estado: "PB", veiculos: 150000, acidentes: 400 },
    { nome: "Cabedelo", estado: "PB", veiculos: 50000, acidentes: 100 },
    { nome: "Maceió", estado: "AL", veiculos: 200000, acidentes: 800 },
    { nome: "Arapiraca", estado: "AL", veiculos: 90000, acidentes: 300 },
    { nome: "Aracaju", estado: "SE", veiculos: 180000, acidentes: 600 },
    { nome: "Lagarto", estado: "SE", veiculos: 50000, acidentes: 150 },
    { nome: "Salvador", estado: "BA", veiculos: 500000, acidentes: 2000 },
    { nome: "Feira de Santana", estado: "BA", veiculos: 200000, acidentes: 700 },
    { nome: "Vitória da Conquista", estado: "BA", veiculos: 100000, acidentes: 300 },
    { nome: "Belo Horizonte", estado: "MG", veiculos: 600000, acidentes: 2500 },
    { nome: "Uberlândia", estado: "MG", veiculos: 200000, acidentes: 600 },
    { nome: "Contagem", estado: "MG", veiculos: 250000, acidentes: 800 },
    { nome: "Juiz de Fora", estado: "MG", veiculos: 150000, acidentes: 400 },
    { nome: "Rio de Janeiro", estado: "RJ", veiculos: 1200000, acidentes: 5000 },
    { nome: "Niterói", estado: "RJ", veiculos: 400000, acidentes: 1200 },
    { nome: "São Gonçalo", estado: "RJ", veiculos: 500000, acidentes: 1500 },
    { nome: "Duque de Caxias", estado: "RJ", veiculos: 350000, acidentes: 1000 },
    { nome: "São Paulo", estado: "SP", veiculos: 1500000, acidentes: 6000 },
    { nome: "Campinas", estado: "SP", veiculos: 500000, acidentes: 1500 },
    { nome: "Santos", estado: "SP", veiculos: 250000, acidentes: 700 },
    { nome: "Guarulhos", estado: "SP", veiculos: 400000, acidentes: 1200 },
    { nome: "São Bernardo do Campo", estado: "SP", veiculos: 300000, acidentes: 800 },
    { nome: "Porto Alegre", estado: "RS", veiculos: 600000, acidentes: 2200 },
    { nome: "Caxias do Sul", estado: "RS", veiculos: 200000, acidentes: 500 },
    { nome: "Pelotas", estado: "RS", veiculos: 150000, acidentes: 400 },
    { nome: "Rio Grande", estado: "RS", veiculos: 100000, acidentes: 250 },
    { nome: "Curitiba", estado: "PR", veiculos: 700000, acidentes: 2500 },
    { nome: "Londrina", estado: "PR", veiculos: 250000, acidentes: 700 },
    { nome: "Maringá", estado: "PR", veiculos: 200000, acidentes: 600 },
    { nome: "Foz do Iguaçu", estado: "PR", veiculos: 150000, acidentes: 400 },
    { nome: "Florianópolis", estado: "SC", veiculos: 300000, acidentes: 800 },
    { nome: "Joinville", estado: "SC", veiculos: 250000, acidentes: 700 },
    { nome: "Blumenau", estado: "SC", veiculos: 150000, acidentes: 350 },
    { nome: "Itajaí", estado: "SC", veiculos: 100000, acidentes: 250 },
    { nome: "Brasília", estado: "DF", veiculos: 500000, acidentes: 1800 },
    { nome: "Goiânia", estado: "GO", veiculos: 400000, acidentes: 1200 },
    { nome: "Aparecida de Goiânia", estado: "GO", veiculos: 200000, acidentes: 500 },
    { nome: "Anápolis", estado: "GO", veiculos: 150000, acidentes: 400 },
    { nome: "Cuiabá", estado: "MT", veiculos: 250000, acidentes: 700 },
    { nome: "Várzea Grande", estado: "MT", veiculos: 100000, acidentes: 300 },
    { nome: "Campo Grande", estado: "MS", veiculos: 300000, acidentes: 900 },
    { nome: "Dourados", estado: "MS", veiculos: 150000, acidentes: 400 },
    { nome: "Belém", estado: "PA", veiculos: 400000, acidentes: 1200 },
    { nome: "Ananindeua", estado: "PA", veiculos: 250000, acidentes: 700 },
    { nome: "Santarém", estado: "PA", veiculos: 150000, acidentes: 400 },
    { nome: "Manaus", estado: "AM", veiculos: 350000, acidentes: 1000 },
    { nome: "Parintins", estado: "AM", veiculos: 80000, acidentes: 200 },
    { nome: "Boa Vista", estado: "RR", veiculos: 50000, acidentes: 150 }
];

let maior = cidades[0];
let menor = cidades[0];

for (let cidade of cidades) {
    if (cidade.acidentes > maior.acidentes) {
        maior = cidade;
    }
    if (cidade.acidentes < menor.acidentes) {
        menor = cidade;
    }
}

let totalVeiculos = cidades.reduce((soma, c) => soma + c.veiculos, 0);
let mediaVeiculos = totalVeiculos / cidades.length;


let cidadesRN = cidades.filter(c => c.estado === "RN");
let totalAcidentesRN = cidadesRN.reduce((soma, c) => soma + c.acidentes, 0);
let mediaAcidentesRN = cidadesRN.length > 0 ? totalAcidentesRN / cidadesRN.length : 0;


console.log("=== Estatísticas de Acidentes ===");
console.log(`Cidade com MAIOR número de acidentes: ${maior.nome} (${maior.estado}) - ${maior.acidentes} acidentes`);
console.log(`Cidade com MENOR número de acidentes: ${menor.nome} (${menor.estado}) - ${menor.acidentes} acidentes`);
console.log(`Média de veículos nas cidades: ${mediaVeiculos.toFixed(2)}`);
console.log(`Média de acidentes nas cidades do RN: ${mediaAcidentesRN.toFixed(2)}`);