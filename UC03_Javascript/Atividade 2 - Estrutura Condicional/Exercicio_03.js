import PromptSync from "prompt-sync";
const prompt = PromptSync()

let nome = prompt('Digite o seu nome: ')
let valor = Number(prompt(`Sr(a) ${nome}, digite o valor de sua compra: `))

if(valor <= 100){
    console.log('Sem desconto.')
    console.log(`Valor Final: R$ ${(valor).toFixed(2)}`)
}else if(valor == 101 || valor < 500){
    let desconto5 = valor*0.05
    console.log(`\nSr(a ${nome}, você ganhou 5% de desconto.`)
    console.log(`O Valor de desconto é: R$ ${(desconto5).toFixed(2)}`)
    console.log(`Valor da compra: R$ ${(valor).toFixed(2)}`)
    console.log(`Valor Final: R$ R$ ${(valor-desconto5).toFixed(2)}`)
}else if(valor > 500){
    let desconto10 = valor*0.10
    console.log(`\nSr(a) ${nome}, você ganhou 10% de desconto.`)
    console.log(`O valor de desconto é: R$ ${(desconto10).toFixed(2)}`)
    console.log(`Valor da compra: ${(valor).toFixed(2)}`)
    console.log(`Valor final: R$ ${(valor-desconto10).toFixed(2)}`)
}  