import PromptSync from "prompt-sync";
const prompt = PromptSync()
let sim = 0

let nome = prompt('Digite o seu nome: ')

let resp1 = prompt(`Sr(a) ${nome}, Telefonou para a vítima? `)
if (resp1.toLowerCase() === 'sim') sim++;

let resp2 = prompt(`Sr(a) ${nome}, Esteve no local do crime? `)
if (resp2.toLowerCase() === 'sim') sim++;

let resp3 = prompt(`Sr(a) ${nome}, Mora perto da vítima? `)
if (resp3.toLowerCase() === 'sim') sim++;

let resp4 = prompt(`Sr(a) ${nome}, Devia para a vítima? `)
if (resp4.toLowerCase() === 'sim') sim++;

let resp5 = prompt(`Sr(a) ${nome}, Já trabalhou com a vítima? `)
if (resp5.toLowerCase() === 'sim') sim++;



switch(sim){
    case 2:
       console.log(`\nSr(a) ${nome}, Você é Suspeito!`)
    break;
    
    case 3:
    case 4:
        console.log(`\nSr(a) ${nome}, Você é cumplice!`)
    break;
    
    case 5:
        console.log(`\nSr(a) ${nome}, Você é o Assassino!`)
    break;
    
    default:
        console.log(`\nSr(a) ${nome}, Você é Inocente!`)
    break;    
}