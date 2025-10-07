import PromptSync from "prompt-sync";
const prompt = PromptSync();

export class Pessoa{
    nome
    #cpf
    dataNascimento
        constructor(nome, cpf, dataNascimento){
            this.nome = nome;
            this.#cpf = cpf;
            this.dataNascimento = dataNascimento;
        }

       set cpf(numCpf){
        this.#cpf = numCpf
       } 
       get cpf(){
        return this.#cpf
       }

inserirInformacoes(){
   this.nome = prompt('Digite seu nome: ');
   this.#cpf = prompt('Digite seu CPF: ');
   this.dataNascimento = prompt('Digite sua data de nascimento: ');
   console.log('\n=====================================');
   console.log('Dados pessoais:');
   console.log(`Nome: ${this.nome}`);
   console.log(`CPF: ${this.#cpf}`);
   console.log(`Data de Nascimento: ${this.dataNascimento}`);
   

   console.log(`Olá Sr(a), ${this.nome}\n`);
}
};

export class Funcionario extends Pessoa{
    cargo
    #salario
    #matricula
    constructor(nome, cpf, dataNascimento, cargo, salario, matricula){
        super(nome, cpf, dataNascimento);
        this.cargo = cargo;
        this.#salario = salario;
        this.#matricula = matricula;
    }

    set salario(valSalario){
        this.#salario = valSalario
    }
    get salario(){
        return this.#salario
    }

    set matricula(numMatricula){
        this.#matricula = numMatricula
    }
    get matricula(){
        return this.#matricula
    }

informacaoFuncionario(){
    this.cargo = prompt('Digite o seu Cargo: ');
    this.#salario = Number(prompt('Digite seu salário: '))
    this.#matricula = Number(prompt('Digite o sua matricula: '));
}

calculoHoraExtra() {
    let valorHoraExtra = 15;
    let qtdHoras = Number(prompt('Digite a quantidade de horas extra: '));
    if (qtdHoras > 0) {
        let valorExtra = qtdHoras * valorHoraExtra;
        let novoSalario = this.#salario + valorExtra;
        console.log(`\nValor das horas extras: ${valorExtra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        console.log(`Salário total com horas extras: ${novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    } else {
        console.log('Quantidade inválida! Digite novamente.');
    }

}
}
export class Gerente extends Funcionario{
    setor
    quantidadeEquipe
        constructor(nome, cpf, dataNascimento, cargo, salario, matricula, setor, quantidadeEquipe){
            super(nome, cpf, dataNascimento, cargo, salario, matricula);
            this.setor = setor;
            this.quantidadeEquipe = quantidadeEquipe;
        }

calculoBonificacao(){
    let bonificacao
    let equipe = this.quantidadeEquipe
    equipe = Number(prompt('Digite a quantidade de pessoas na sua equipe: '));
    if (equipe >= 10){
         bonificacao = this.salario * 0.15
    }
    else{
        bonificacao = this.salario * 0.07
    }
    console.log(`Sua bonificação é de: ${bonificacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);	
    console.log(`Valor total: ${(this.salario + bonificacao).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}
}

export class Diretor extends Funcionario{
    #participacaoLucros
    departamento
    tempoDirecao
        constructor(nome, cpf, dataNascimento, cargo, salario, matricula, participacaoLucros, departamento, tempoDirecao){
            super(nome, cpf, dataNascimento, cargo, salario, matricula);
            this.#participacaoLucros = 0;
            this.departamento = departamento;
            this.tempoDirecao = tempoDirecao;
        }

        set participacaoLucros(Lucros){
            this.#participacaoLucros = Lucros
        }
        get participacaoLucros(){
            return this.#participacaoLucros
        }

calcularGratificacao(){
    var gratificacao;

    this.participacaoLucros = Number(prompt('Você tem participação nos lucros? 1 - sim / 2 - não: '))
    this.tempoDirecao = Number(prompt('Digite o tempo de direção em anos: '));
    if (this.participacaoLucros == 1 && this.tempoDirecao > 5){
        gratificacao = this.salario * 0.30
    }else if (this.participacaoLucros == 1 && (this.tempoDirecao <= 5 && this.tempoDirecao >= 2)){
        gratificacao = this.salario * 0.25
    }else if (this.participacaoLucros == 1 && this.tempoDirecao < 2 ){
        gratificacao = this.salario * 0.20
    }else if (this.participacaoLucros == 2){
        gratificacao = this.salario * 0.15
    }
    console.log(`\nSua gratificação é de: ${gratificacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    console.log(`Valor do seu salário: ${(this.salario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    
    console.log(`Valor total: ${(this.salario +  gratificacao).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        
}
}

export class Dono extends Pessoa{
    patrimonio
    participacaoAcionaria
        constructor(nome, cpf, dataNascimento, patrimonio, participacaoAcionaria){
            super(nome, cpf, dataNascimento);
            this.patrimonio = patrimonio;
            this.participacaoAcionaria = participacaoAcionaria;
        }
investir(valor){
    this.patrimonio = Number(prompt('Digite o valor do seu patrimonio: '));
    valor = Number(prompt('Digite o valor de Investimento: '));
    this.participacaoAcionaria = valor + this.patrimonio
    console.log(`\nO valor de seu Patrimônio é: ${(this.patrimonio).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    console.log(`Seu valor de investimento é: ${(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    console.log(`O valor de seu investimento + Patrimônio é: ${(this.participacaoAcionaria).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

}
retirarLucros(valor){
    valor = this.participacaoAcionaria * 0.20;
    console.log(`Esse é o lucro de sua empresa: R$ ${(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}
}



