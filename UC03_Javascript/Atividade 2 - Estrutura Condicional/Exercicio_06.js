import PromptSync from "prompt-sync";
const entrada = PromptSync()

let nome = entrada('Digite o seu nome: ')
console.log('\n1 - Moto\n')
console.log('2 - Carro\n')
console.log('3 - Caminhão')
let veiculo = Number(entrada(`Sr(a) ${nome}, Digite qual o tipo de seu veiculo: `))
let tempo = Number(entrada('Agora digite quanto tempo você ficou no estacionamento: '))

let moto = 7
let carro = 12
let caminhao = 25

if(veiculo == 1 && tempo <=1){
    console.log(`Taxa de estacionamento: R$ ${(moto).toFixed(2)}`)
}else if (veiculo == 1 && tempo >= 2){
    console.log(`Taxa de estacionamento: R$ ${(moto).toFixed(2)}`)
    console.log(`Tempo de estacionamento: ${tempo}`)
    console.log(`Taxa de acrescimo por hora: R$ ${(tempo).toFixed(2)}`)
    console.log(`Valor final: `)
}else if(veiculo == 2 && tempo <= 1){
    console.log(`Taxa de estacionamento: R$ ${(carro).toFixed(2)}`)
}else if(veiculo == 2 && tempo >= 2){
    console.log(`Taxa de estacionamento: R$ ${(carro).toFixed(2)}`)
    console.log(`Tempo de estacionamento: ${tempo}`)
    console.log(`Taxa de acrescimo por hora: R$ ${(tempo).toFixed(2)}`)
    console.log(`Valor final: `)
}else if(veiculo == 3 && tempo <=1){
    console.log(`Taxa de estacionamento: R$ ${(caminhao).toFixed(2)}`)
}else if(veiculo == 3 && tempo >= 2){
    console.log(`Taxa de estacionamento: R$ ${(caminhao).toFixed(2)}`)
    console.log(`Tempo de estacionamento: ${tempo}`)
    console.log(`Taxa de acrescimo por hora: R$ ${(tempo).toFixed(2)}`)
    console.log(`Valor final: `)
}
