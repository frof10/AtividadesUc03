import PromptSync from "prompt-sync";
const prompt = PromptSync();

let sisOper = [0,0,0,0,0,0];
let pesquisa   

do{

console.log('\nSistema Operacional\n');
console.log('1 - Windows Server.');
console.log('2  - Unix.');
console.log('3 - Linux.');
console.log('4 - netware.');
console.log('5 - Mac OS');
console.log('6 - Outros');
console.log('0 - Encerrar a votação\n');


pesquisa = Number(prompt('Olá, Digite a opção: '));
    if(pesquisa >= 1  && pesquisa <= 6){
        sisOper[pesquisa - 1]++;
    }else if(pesquisa !== 0){
        console.log('Opção invalida! Digite novamente');
    }
}while(pesquisa !== 0);

let total = sisOper.reduce((acc,val) => acc+val,0);


console.log('\nSistema Operacional\t Votos\t %' );
console.log('------------------------------------');

let nomes = ["Windows Server", "Unix", "Linux", "Netware", "Mac OS", "Outros"];

for (let i = 0; i < sisOper.length; i++) {
    let percentual = total > 0 ? ((sisOper[i] / total) * 100).toFixed(2) : 0;
    console.log(`${nomes[i].padEnd(16)}\t ${sisOper[i]} \t ${percentual}%`);
}
console.log('------------------------------------');
console.log(`Total:\t\t\t ${total}`);




