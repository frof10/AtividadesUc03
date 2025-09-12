import PromptSync from "prompt-sync";
const prompt = PromptSync()

let largura = Number(prompt('Digite a largura: '))
let altura = Number(prompt('Digite a altura: '))

let calculoArea = largura*altura
let calculoPerimetro = calculoArea*calculoArea

console.log(`\nO tamanho da area é: ${calculoArea}\n`)
console.log(`O calculo do périmetro é: ${calculoPerimetro}`)