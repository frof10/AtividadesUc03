import PromptSync from "prompt-sync";
const entrada = PromptSync()

let nome = entrada('Digite o seu nome: ')
let idade = Number(entrada(`Sr(a) ${nome}, Digite a sua idade: `))
let estudante = Number(entrada('Você é estudante?(1 - Sim ou 2 - Não): '))

if(idade < 6 ){
    console.log('Entrada gratuita')
}else if (idade >= 6, idade <= 17 || estudante == 1){
    console.log('Tarifa meia')
}else if(idade >= 18, idade <=59){
    console.log('Tarifa inteira')
}else{
    console.log('Tarifa gratuita')
}