import PromptSync from "prompt-sync";
const prompt = PromptSync()

let nome = prompt('Digite o seu nome: ')
console.log(`Olá Sr(a), ${nome} \n`)
let idade = Number (prompt('Digite a sua idade em anos: ','\n'))
let anos = 360
anos = anos*idade
console.log(`${nome} a sua idade é ${idade}, e a quantidade de anos informado é ${anos}`)