class Aluno{
    constructor(nome,serie,nota1,nota2,nota3,nota4){
        this.nome = nome;
        this.serie = serie;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    media(){
        return (this.nota1+this.nota2.this+nota3+nota4)/4;
    }

    checaAprovacao(media){
        if(meedia >= 5){
            return "aprovado";
        }else{
            return "reprovado";
            
        }
    }
}

let aluno1 = new Aluno("Roberto","terceirão",5,10,9,7);

console.table(aluno1);
console.log(
    `
    ------Boletim------
    Nome: ${aluno1.nome}
    Série: ${aluno1.serie}
    Nota 1: ${aluno1.nota1}
    Nota 2: ${aluno1.nota2}
    Nota 3: ${aluno1.nota3}
    Nota 4: ${aluno1.nota4}
    Média:  ${aluno1.media()}
    Situação: ${aluno1.checaAprovacao(aluno1.media())}
    `
);