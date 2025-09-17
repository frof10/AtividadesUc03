import PromptSync from "prompt-sync";
const prompt = PromptSync();
let meses = ['Janeiro','Fervereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

let temperatura = [];
let soma = 0;

for(let i = 0; i < 12; i++){
let temperaturaMeses = Number(prompt(`Digite a media de temperatura do ${meses[i]}: `));
    temperatura.push(temperaturaMeses);
    soma += temperaturaMeses;
}

let media = soma/12;

    console.log(`A média de temperatura anual é: ${(media).toFixed(2)}°C\n `);
    console.log("Meses com temperatura acima da média:\n")

for (let i = 0; i < 12; i++) {
  if (temperatura[i] > media) {
    console.log(`${meses[i]}: ${temperatura[i]}°C`);
  }
}