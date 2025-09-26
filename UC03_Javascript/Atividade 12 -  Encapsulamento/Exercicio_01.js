import PromptSync from "prompt-sync";
const prompt = PromptSync();

class cliente {
        #nome 
        #endereco  
        #renda
        constructor(nome,endereco,renda){
            this.#nome = nome
            this.#endereco = endereco
            this.#renda = renda
        } 

    set nome(nomeCliente){
        this.#nome = nomeCliente
    }
    get nome(){
        return this.#nome
    }
    set endereco(enderecoCliente){
        this.#endereco = enderecoCliente
    }
    get endereco(){
        return this.#endereco
    }
    set renda(rendaCliente){
        this.#renda = rendaCliente
    }
    get renda(){
        return this.#renda
    }

imprimir(){
    console.log(`Nome do cliente: ${this.nome}`);
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Renda R$ ${(this.renda).toFixed(2)}`);
}
}

console.log('\n==================================');
console.log('Banco Redenção - Area do Cliente.');
console.log('==================================\n');

var clien1 = new cliente(
    prompt('Digite o seu nome: '),
    prompt('Digite o seu endereço: '), 
    Number(prompt('Digite a sua renda: ')));

console.log('\n==================================');
console.log('Banco Redenção - Area do Cliente.');
console.log('==================================\n');

var clien2 = new cliente(
    prompt('Digite o seu nome: '),
    prompt('Digite o seu endereço: '), 
    Number(prompt('Digite a sua renda: ')));

console.log('\n=======================================');
console.log('Dados do cliente - Banco Redenção.\n')
clien1.imprimir()
console.log('\n=======================================\n');
console.log('Dados do cliente - Banco Redenção.\n');
clien2.imprimir()
console.log('\n=======================================');
