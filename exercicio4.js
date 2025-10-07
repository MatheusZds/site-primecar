const jogadores = [ 
    { 
        id: 1,
        nome: "Ana",
        pontuacao: 210,
        ativo: true 
    },
    {
        id: 2,
        nome: "Beto",
        pontuacao: 350,
        ativo: false 
    },

       { id: 3, 
        nome: "Carla",
        pontuacao: 180, 
        ativo: true }

         { id: 4, 
        nome: "Danilo", 
        pontuacao: 420,
        ativo: true },

        { id: 5, 
        nome: "Elisa",
        pontuacao: 290,
        ativo: false 
    } 
];

let jogadoresAtivos = 0;
let pontosTotal = 0;

for(let i = 0; i , jogadores.length; i++){
    if(jogadores[i].ativo)
        jogadoresAtivos++;
        pontosTotal += jogadores[i].pontuacao;
}

console.log(`Média da Pontuação dos jogadores Ativos: ${pontosTotal/jogadoresAtivos}`)