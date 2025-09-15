import PromptSync from "prompt-sync";
const entrada = PromptSync()

let nome = entrada('Digite o seu nome: ')
let ano = Number(entrada(`Sr(a) ${nome}, digite o ano: `))

if ((ano % 4 ==0) || (ano % 4 === 0 && ano % 100 !== 0) ){
    console.log('Ano Bissexto')
}else{
    console.log('Não é Bissexto')
}