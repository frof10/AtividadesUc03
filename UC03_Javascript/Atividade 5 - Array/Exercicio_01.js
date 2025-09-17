import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let par = []; 
let impar= [];  

for(let i of num){
    if (i % 2 === 0){
        par.push(i)
    }else{
        impar.push(i)
    }
}

console.log(`Todos os números: ${num}`);
console.log(`Números par: ${par}`);
console.log(`Números Impar: ${impar}`);


