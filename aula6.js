 //Paradigma de Programação orientado a objetos
// Sintaxe Objeto
// let NomeObjeto = {
//     atributo1,
//     atributo2,
//     atributo3,
//     método1(){código},
//     método2(){código},
// }

let Pessoa = {
    peso: 85,
    altura: 1.79,
    corDoCabelo: "azul",
    corDosOlhos:"vermelho",

    fala(){
        console.log("Olá!");
        
    },

    andar(){
        console.log("mover as pernas");

    },

}

Pessoa.altura = 1.90;

console.log(Pessoa.peso,Pessoa.altura);

let nomesItens = ["Poção de Vida", "Espada Mágica", "Escudo de Ferro", "Elixir da Sabedoria", "Amuleto do Dragão"];
let precosItens = [50, 500, 150, 1000, 750];

//Array de objetos
let itens =[
    {
        nome: "Poção de Vida",
        preço: 50,

    },
    {
    nome: "Espada Mágica",
    preco: 500,
    },
    {
        nome:"Amuleto do Dragão",
        preco: 750,
    }
];

function itemMaisCaro(itens){
    let itemMaisCaro = {
    preco: 0,
    };
    for (let i =0; i < itens.lenght; i++){
        if(itens[i].preco > itemMaisCaro.preco){
        ItemMaisCaro = itens[i];

        }
    }
    console.table(itemMaisCaro)
}

itemMaisCaro(itens);

//Princípios da Orientação a objetos
//Abstração - os atributos só podem ser acessados pelo próprio objeto 
//Herança - As clsses filhas recebem todos os atributos e métodos da classe mãe
//Polimorfismo - As classes filhas apesar de receber os métodos e atributos da classe mãe,podem alterar os metodos e atributos recebidos.
//this - palavra chave que indica que o atributo acessado dentro do objeto.

class Animal {
    constructor(raca,cor,tamanho,peso){
        this.peso = peso;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho;
    }
   
    som(){
        console.log("ruido");

    }
}

class Cachorro extends Animal {
    constructor(raca,cor,tamanho,peso,nome){
        super(raca,cor,tamanho,peso);
        this.nome = nome;
    }

    som(){
        console.log("Au au");

    }

}

let Matheus = new Cachorro("bulldog","preto","pequeno",180,"Matheus")

console.table(Matheus);
Matheus.som();