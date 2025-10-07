catalogoProduto = [
    {id: 1,
    nome: Batata,
    preco: 500,
    emEstoque: false },

    { id: 2,
    nome: Arroz,
    preco: 700,
     emEstoque: true},

    { id: 3,
    nome: Feijão,
    preco: 900,
    emEstoque: false}
]

let produtosDisponiveis=[]

for(let i = 0;i<catalogoProduto.lenght;i++){
    if (catalogoProduto[i].emEstoque==true) produtosDisponiveis.push(catalogoProduto[i])
}
console.log(`Produto: ${catalogoProduto[i].nome} = Preço R$${produtosDisponiveis[i].preco}`)




// console.log(Saída esperada): 
// --- Produtos Disponíveis --- 
// Nome: Notebook Gamer, Preço: R$ 4500 
// Nome: Teclado Mecânico, Preço: R$ 350