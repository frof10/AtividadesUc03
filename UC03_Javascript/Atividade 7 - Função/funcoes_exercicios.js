// Função ultilizada no exercicio_01.js para calcular calorias.
export function calorias(exercicio,tempo){
   switch(exercicio){
        case 'caminhada':
            return 5 * tempo;
        break;

        case 'corrida':
            return 10 * tempo;
        break;

        case 'bicicleta':
            return 8 * tempo;
        break;
    }
}

//Função do Exercicio_02.js - Saque e Deposito.
export function depositar(saldo,valor){
    return saldo + valor;
}

export function sacar(saldo,valor){
    return saldo - valor;
}
