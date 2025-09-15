import PromptSync from "prompt-sync";
const prompt = PromptSync();

while(true){
    let valorTotal = 0;
    let quantidadeProdutos = 0;
    
    console.log("Iniciando nova compra. Digite 0 para finalizar a compra.");

    while(true){
        let valor = parseFloat(prompt('Digite o valor da compra: '));

        if(isNaN(valor) || valor < 0){
            console.log("Valor inválido. Digite um número positivo ou 0 para encerrar.");
            continue;
        }

        if(valor === 0){
            break;
        }

        valorTotal = valorTotal + valor;
        quantidadeProdutos = quantidadeProdutos + 1;
    }

    if(quantidadeProdutos === 0){
        console.log("Nenhum produto foi registrado. Iniciando nova compra...");
        continue;
    }

    console.log(`Total da compra: R$ ${valorTotal.toFixed(2)}`);

    let valorPago = 0;
    while(true){
        valorPago = parseFloat(prompt('Digite o valor pago pelo cliente: '));

        if(isNaN(valorPago) || valorPago < valorTotal){
            console.log("Valor insuficiente. Digite um valor maior ou igual ao total da compra.");
        } else {
            break;
        }
    }

    let troco = valorPago - valorTotal;
    console.log(`Troco: R$ ${troco.toFixed(2)}`);
    console.log(`Quantidade de produtos: ${quantidadeProdutos}`);
    console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Valor pago: R$ ${valorPago.toFixed(2)}`);

}

