import PromptSync from "prompt-sync";
const prompt = PromptSync()

let fixo = 5
let taxa = 10

let distancia = Number(prompt('Digite a distancia em km: '))

let valor = distancia*fixo
let valorFinal = valor+taxa

console.log(`\nValor da entrega: R$ ${(valor).toFixed(2)}\n`)
console.log(`Valor de taxa fixa: R$ ${(taxa).toFixed(2)}\n`)
console.log(`Valor da entrega + taxa: R$ ${(valorFinal).toFixed(2)}`)
