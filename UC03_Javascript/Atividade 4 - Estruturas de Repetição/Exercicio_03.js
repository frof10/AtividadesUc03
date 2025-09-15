import promptSync from 'prompt-sync'
const prompt = promptSync()

let numero = Number (prompt('Digite um valor: '))

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Valor inválido. Digite um número inteiro.");
}

if (numero < 2) {
    console.log("Números menores que 2 não são primos.");
}

if (numero >= 2) {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores = divisores + 1;

            if (i !== 1 && i !== numero) {
                console.log("Divisível por: " + i);
            }
        }
    }

    if (divisores === 2) {
        console.log("O número " + numero + " é primo.");
    }

    if (divisores > 2) {
        console.log("O número " + numero + " NÃO é primo.");
        console.log("Também é divisível por 1 e " + numero + ".");
    }
}