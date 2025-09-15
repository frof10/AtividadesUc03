const valor = 6.99

console.log('===============================')
console.log('\tTabela de Valores')
console.log('===============================\n')
console.log('Quant. \t\t Valor\n')

for(let i = 1; i < 50; i++ ){
    let valorFinal = i*valor
    console.log(`${i}\t - \t${(valorFinal).toFixed(2)}`)
}