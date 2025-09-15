import PromptSync from "prompt-sync";
const prompt = PromptSync()

let nome = prompt('Digite o seu nome: ')
let salario = Number(prompt('Digite o seu salário: '))
let valorEmprestimo = Number(prompt('Digite o valor de emprestimo: '))
let numeroParcelas = Number(prompt('Digite o números de parcelas: '))

let valorParcelas = valorEmprestimo/numeroParcelas
let taxaJurosMes = valorParcelas*0.035
let taxaNegado = salario*0.30

if(valorParcelas > taxaNegado){
    console.log('\tEmpréstimo negado!')
    console.log('No momento não podemos autorizar seu empréstimo.')
    console.log('\tTente novamente em 45 dias.')
}else{
    console.log('\nEmprestimo Aprovado')
    console.log(`Valor solicitado: ${(valorEmprestimo).toFixed(2)}`)
    console.log(`Total de parcelas: ${numeroParcelas}`)
    console.log(`Valor de juros ao mês: R$ ${(taxaJurosMes).toFixed(2)}`)
    console.log(`Valor da parcelas: R$ ${(valorParcelas+taxaJurosMes).toFixed(2)}`)
    console.log(`Total do emprestimo: R$ ${((valorParcelas+taxaJurosMes)*numeroParcelas).toFixed(2)}`)
}