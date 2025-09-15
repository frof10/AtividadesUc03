import PromptSync from "prompt-sync";  
const prompt = PromptSync()

var nome = prompt('Digite o seu nome: ')
var velocidade = Number (prompt(`Olá Sr(a), ${nome}, Digite a sua velocidade: `))
var velocidadePermitida = Number(prompt('Agora digite a velociade da via: '))

var velocidadeCalculada = ((velocidadePermitida/100) * 10) + velocidadePermitida
console.log(`${velocidadeCalculada}`)
if(velocidade > velocidadePermitida && velocidade <= velocidadeCalculada){
    console.log('Atenção: acima do permitido, multa leve!')
}else if (velocidade > velocidadeCalculada){
    console.log('Atenção: acima do permitido, multa grave!')
}else{
    console.log('Velocidade dentro do limite.')
}