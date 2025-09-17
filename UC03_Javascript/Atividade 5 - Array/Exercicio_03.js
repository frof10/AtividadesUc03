import PromptSync from "prompt-sync";
const prompt = PromptSync();

let elemento1 = ['Céu','Casa','Rua','Bola','Muro','Porta','Vaso','Mesa','Camisa','Vestido'];
let elemento2 = ['Azul','Rosa','Laranja','Amarela','Preto','Moarrom','Vermelho','Creme','Verde','Roxo' ];

let intercalar = [];
let juncao = Math.max(elemento1.length, elemento2.length);

for(let i = 0; i < juncao; i++){
    if (i < elemento1.length){
        intercalar.push(elemento1[i]);
    }if (i < elemento2.length){
        intercalar.push(elemento2[i]);
    }
}
console.log('=====================================');
console.log(`\nPrimeiras palavras: ${elemento1}`);
console.log(`Proximas palavras: ${elemento2}\n`);
console.log(`Junção de palavras: ${intercalar}\n`);
console.log('=====================================');




