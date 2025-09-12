import PromptSync from "prompt-sync";
const prompt = PromptSync()

let nomeProduto = prompt('Digite o nome do produto: ')
let precoProduto = Number(prompt('Digite o valor do produto: '))
let desconto = Number(prompt('Digite o valor do desconto: '))

let descontoFinal = precoProduto*desconto
let precoFinal = precoProduto-descontoFinal

console.log(`\nO produto ${nomeProduto}\n`)
console.log(`Valor: ${precoProduto}\n`)
console.log(`Valor do desconto ${descontoFinal}\n`)
console.log(`Valor com desconto: ${precoFinal}`)