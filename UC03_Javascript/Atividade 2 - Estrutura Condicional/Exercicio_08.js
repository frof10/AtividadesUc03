import PromptSync from "prompt-sync";
const prompt = PromptSync();

while (true) {
    
    
    let num = Number(prompt('Digite um número inteiro e até 1000: '))
        if(num <= 0 || num > 1000){
            console.log('Valor inválido, Digite novamente.')
            continue;
        }
          
     
        let unidades = Math.floor(num % 10);
        let dezenas = Math.floor((num % 100)/ 10)
        let centenas = Math.floor((num % 1000)/ 100)
        
        if(num >= 100){
            console.log(`${num} tem: ${unidades} Unidades e ${dezenas} Dezenas e ${centenas} Centenas.`)
        }else if (num >= 10){
            console.log(`${num} tem: ${unidades} Unidades, ${dezenas} Dezenas.`)
        }else{
            console.log(`${num} tem: ${unidades} Unidades.`)
        }break;
}