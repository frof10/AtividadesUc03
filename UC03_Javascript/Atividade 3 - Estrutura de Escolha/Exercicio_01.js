import promptSync from "prompt-sync"
const prompt = promptSync()

let real = Number(prompt('Digite o valor em Real: '))
console.log('\n1 - Dolar\n')
console.log('2 - Euro\n ')
console.log('3 - Peso\n')
console.log('4 - Libra\n')
console.log('5 - Franco\n')
let moeda = prompt('Escolha a moeda para converção: ').toUpperCase()

switch(moeda){
    case 'DOLAR':
        let dolar = 5.424
        let dolarConvertido = real/dolar
        console.log(`\nO valor em digitado em Real: R$${real}`)
        console.log(`\nO valor convertido de Real para Dolar : R$${(dolarConvertido).toFixed(2)} `)
    break
    case 'EURO':
        let euro = 6.353
        let euroConvertido = real/euro
        console.log(`\nO valor em digitado em Real: R$ ${real}`)
        console.log(`\nO valor convertido de Real para Euro : R$${(euroConvertido).toFixed(2)} `)
    break
    case 'PESO':
        let peso = 0.0042
        let pesoConvertido = real/peso
        console.log(`\nO valor em digitado em Real: R$ ${real}`)
        console.log(`\nO valor convertido de Real para Peso : R$${(pesoConvertido).toFixed(2)} `)
    break
    case 'LIBRA':
        let libra = 7.326
        let libraConvertio = real/libra
        console.log(`\nO valor em digitado em Real: R$ ${real}`)
        console.log(`\nO valor convertido de Real para Libra : R$${(libraConvertido).toFixed()} `)
    case 'FRANCO':
        let franco = 6.753
        let francoConvertido = real/franco
        console.log(`\nO valor em digitado em Real: R$ ${real}`)
        console.log(`\nO valor convertido de Real para Franco : R$ ${(francoConvertido).toFixed(2)} `)
    break
    default:
        console.log('\nOpção invalida!')
}