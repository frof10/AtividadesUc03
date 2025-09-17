import PromptSync from "prompt-sync";
const prompt = PromptSync();

let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];
let cons = [];
let vogais = [];

for(let i of letras){
    if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
        vogais.push(i)
    }else{
        cons.push(i)
    }
}
    console.log(`Todas as letras: ${letras}`);
    console.log(`Todas as consoantes: ${cons}`);
    console.log(`Total de consoantes: ${cons.length}`);
    
    
