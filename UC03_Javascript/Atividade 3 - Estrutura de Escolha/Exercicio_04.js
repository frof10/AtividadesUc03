import PromptSync from "prompt-sync";
const entrada = PromptSync()

console.log('========================================')
console.log('\t\tLanches')
console.log('========================================\n')
console.log('1 - Burguer ================================== R$19,50')
console.log('Pão de hamburguer + carne 150g\n')
console.log('2 - X-Burger ================================= R$21,50')
console.log('Pão de hamburguer + carne 150g + queijo\n')
console.log('3 - X-Salada ================================= R$23,50')
console.log('Pão de hamburguer + carne 150g')
console.log('+ queijo + salada\n')
console.log('4 - X-Bacon ================================== R$24,50')
console.log('Pão de hamburguer + carne 150g')
console.log('+ queijo + bacon\n')
console.log('5 - X-Bacon Egg ============================== R$25,50')
console.log('Pão de hamburguer + carne 150g')
console.log('+ queijo + bacon + ovo\n')
console.log('6 - X-Tudo =================================== R$25,50')
console.log('Pão de hamburguer + carne 150g')
console.log('+ queijo + bacon + ovo + presunto + milho\n')
console.log('7 - Caipira ================================== R$22,50')
console.log('Pão de hamburguer + burguer de frango')
console.log('+ salada + milhoo\n')

let lanche = Number (entrada('Digite o seu pedido (opções 1 a 7): '))
let quantidade = Number (entrada('Digite a quantidade: '))

let burgue = 19.50
let xBurguer = 21.50
let xSalada = 23.50
let xBancon = 24.50
let xBaconEgg = 25.50
let xTudo = 25.50
let caipiraBurgue = 22.50

switch(lanche){
    case 1:
        console.log(`\nO hamburguer custa: R$${(burgue).toFixed(2)}`)
        console.log(`Quantidade: ${quantidade}`)
        console.log(`Valor total: R$${(burgue*quantidade).toFixed(2)}`)
    break;

    case 2:
        console.log(`\nO hamburguer custa: R$${(xBurguer).toFixed(2)}`)
        console.log(`Quantidade: ${quantidade}`)
        console.log(`Valor total: R$${(xBurguer*quantidade).toFixed(2)}`)
    break;

    case 3:
        console.log(`\nO hamburguer custa: R$${(xSalada).toFixed(2)}`)
        console.log(`Quantidade: ${quantidade}`)
        console.log(`Valor total: R$${(xSalada*quantidade).toFixed(2)}`)
    break;

    case 4:
        console.log(`\nO hamburguer custa: R$${(xBancon).toFixed(2)}`)
        console.log(`Quantidade: ${quantidade}`)
        console.log(`Valor total: R$${(xBancon*quantidade).toFixed(2)}`)
    break;

    case 5:
        console.log(`\nO hamburguer custa: R$${(xBaconEgg).toFixed(2)}`)
        console.log(`Quantidade: ${quantidade}`)
        console.log(`Valor total: R$${(xBaconEgg*quantidade).toFixed(2)}`)
    break;

    case 6:
        console.log(`\nO hamburguer custa: R$${(xTudo).toFixed(2)}`)
        console.log(`Quantidade: ${quantidade}`)
        console.log(`Valor total: R$${(xTudo*quantidade).toFixed(2)}`)
    break;

    case 7:
        console.log(`\nO hamburguer custa: R$${(caipiraBurgue).toFixed(2)}`)
        console.log(`Quantidade: ${quantidade}`)
        console.log(`Valor total: R$${(caipiraBurgue*quantidade).toFixed(2)}`)
    break;

    default:
        console.log('\nCodigo Invalido, digite novamente seu pedido.')
    


}