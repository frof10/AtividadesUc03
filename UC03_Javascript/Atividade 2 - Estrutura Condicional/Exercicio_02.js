import PromptSync from "prompt-sync";
const prompt = PromptSync()

var nome = prompt('Digite o seu nome: ')
var contagem = Number (prompt(`Olá Sr(a), ${nome}, Digite o consumo em kWh: `))
var vencimento = Number(prompt('O pagamento está dentro do vencimento ? (1 - Sim ou 2 - Não):  '))

let ate100 = 1.20
let apos100 = 1.70


if(contagem <= 100 && vencimento == 1 ){
    console.log(`\nSr(a) ${nome}, o seu consumo de kWh = ${contagem}`)
    console.log(`Valor em kWh: R$ ${(ate100).toFixed(2)}`)
    console.log(`Valor da fatura: R$ ${(ate100*contagem).toFixed(2)}`)
}else if(contagem <= 100 && vencimento == 2 ){
    let extraAbaixo = (ate100*contagem)*0.05
    console.log(`\nSr(a) ${nome}, sua conta está em atraso, causando acrescimo de 5% em cima de sua fatura:`)
    console.log(`O seu consumo de kWh = ${contagem}`)
    console.log(`Valor em kWh: R$ ${(ate100).toFixed(2)}`)
    console.log(`Valor de taxa de vencimento: R$ ${(extraAbaixo).toFixed(2)}`)
    console.log(`Valor da fatura: R$ ${(ate100*contagem).toFixed(2)}`)
    console.log(`Valor da fatura + taxa: R$ ${((ate100*contagem)+extraAbaixo).toFixed(2)}`)
}else if(contagem > 100 && vencimento == 1){
    console.log(`\nSr(a) ${nome}, o seu consumo de kWh = ${contagem}`)
    console.log(`Valor em kWh: R$ ${(apos100).toFixed(2)}`)
    console.log(`Valor da fatura: R$ ${(apos100*contagem).toFixed(2)}`)
}else if(contagem > 100 && vencimento == 2){
    let extraAcima = (apos100*contagem)*0.05
    console.log(`\nSr(a) ${nome}, sua conta está em atraso, causando acrescimo de 5% em cima de sua fatura:`)
    console.log(`O seu consumo de kWh = ${contagem}`)
    console.log(`Valor em kWh: R$ ${(apos100).toFixed(2)}`)
    console.log(`Valor de taxa de vencimento: R$ ${(extraAcima).toFixed(2)}`)
    console.log(`Valor da fatura: R$ ${(apos100*contagem).toFixed(2)}`)
    console.log(`Valor da fatura + taxa : R$ ${((apos100*contagem)+extraAcima).toFixed(2)}`)
}