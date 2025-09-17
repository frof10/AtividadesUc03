import PromptSync from "prompt-sync";
const prompt = PromptSync();
import {calorias} from "./funcoes_exercicios.js";

console.log("========================");
console.log("Calculadora de Calorias:");
console.log("========================\n");

let nome = prompt ('Digite o seu nome: ')
let exercicio

    while(true) {
        exercicio = prompt (`${nome}, Digite qual o tipo de exercicio(Caminhada, Corrida ou Bicicleta): `)
        .toLowerCase()
        .trim();
        
        if(exercicio === 'bicicleta' || exercicio === 'corrida' || exercicio === 'caminhada'){
            break;
        }else{
            console.log('\nDigite novamente!\n');
        }
    } 

let tempo = Number (prompt("Digite o tempo de treino(em minutos): "))   

let gasto = calorias(exercicio,tempo);

console.log('\n========================================================');
console.log(`${nome}, esse é seu resumo de hoje!`)
console.log(`Tipo de treino: ${exercicio}.`);
console.log(`Tempo de treino: ${tempo} min.`);
console.log(`O total de perda de calorias: ${gasto} Kcal.`)
console.log('========================================================');
