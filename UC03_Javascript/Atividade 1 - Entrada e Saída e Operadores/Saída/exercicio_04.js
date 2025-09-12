import PromptSync from "prompt-sync";
const prompt = PromptSync()

let valor = Number(prompt('Digite o valor da conta em R$: '))
let numeroPessoas = Number(prompt('Digite a quantidade de pessoas: '))

let taxa = valor*0.10
let calculo = (taxa+valor)/numeroPessoas

console.log(`\nValor da conta: R$ ${(valor).toFixed(2)}\n`)
console.log(`Valor da taxa de serviço: R$ ${(taxa).toFixed(2)}\n`)
console.log(`O valor final da conta (Consumo + Taxa de serviço): R$ ${(valor+taxa).toFixed(2)}\n`)
console.log(`O valor dividido para ${numeroPessoas} é de: R$ ${(calculo).toFixed(2)}`)