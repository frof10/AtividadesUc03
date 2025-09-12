import PromptSync from "prompt-sync";
const prompt = PromptSync()

let nome = prompt("Digite o seu nome: ")
console.log(`\nOlá ${nome}`)
console.log('\n1 - Básica\n')
console.log('2 - Avançada\n')
let tipoDeOperacao = Number (prompt('Digite o tipo de operação desejada: '))
switch(tipoDeOperacao){
    case 1:
        console.log('\n1 - soma\n')
        console.log('2 - Subtração\n')
        console.log('3 - Multiplicação\n')
        console.log('4 - Divisão\n')
        let operacaoBasica = Number (prompt('Digite o tipo de operação desejada: '))
        
        switch(operacaoBasica){
            case 1:
                let numSoma1 = Number (prompt('\nDigite o primeiro número: '))
                let numSoma2 = Number (prompt('\nDigite o segundo número: '))
                let resultadoSoma = numSoma1 + numSoma2
                console.log(`\nO resultado da soma solicitada é: [ ${resultadoSoma} ]`)
            break

            case 2: 
                let numSub1 = Number (prompt('\nDigite o primeiro número:'))
                let numSub2 = Number(prompt('\nDigite o segundo número: '))
                let resultadoSub = numSub1 - numSub2
                console.log(`\nO resultado da soma solicitada é: [ ${resultadoSub} ] `)
            break

            case 3:
                let numMult1 = Number (prompt('\nDigite o primeiro número: '))
                let numMult2 = Number (prompt('\nDigite o segundo número: '))
                let resultadoMult = numMult1 * numMult2
                console.log(`\nO resultado da soma solicitada é: [ ${resultadoMult} ]`)
            break

            case 4:
                let numDiv1 = Number (prompt('\nDigite o primeiro número: '))
                let numDiv2 = Number (prompt('\nDigite o segundo número: '))
                let resultadoDiv = numDiv1 / numDiv2
                console.log(`\nO resultado da soma solicitada é: [ ${resultadoDiv} ] `)
            break

            default: 
                console.log('\nResultado inválido, Inicie novamente e insira um novo número.\n')
            
            break
        
            } break
    case 2: 
            console.log('1 - Raiz quadrada\n')
            console.log('2 - Potenciação\n')
            let operacaoAvancada = Number (prompt('\nDigite a opção desejada: '))          
        
        switch(operacaoAvancada){
            
            case 1:
                let numRaiz = (prompt('Digite o valor: '))
                let resultadoRaiz = Math.sqrt(numRaiz)
                console.log(`O valor da Raiz quadrada do valor ${numRaiz} é: [ ${resultadoRaiz} ]`)
            break

            case 2:
                let base = Number (prompt('\nDigite o valor base: '))
                let expoente = Number (prompt('\nDigite o expoente: '))
                let resultadoPotencia = Math.pow(base, expoente)
                console.log(`\nO resultado da potência é: [ ${resultadoPotencia} ]`)
                
            break
        }break


        
    
}