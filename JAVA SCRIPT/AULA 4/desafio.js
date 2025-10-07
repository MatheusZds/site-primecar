function analisarDesempenhp(pontos){
let total = 0;
let maiorPonto = 0;
let numeroExcelente = 0;

for (let i=0;i < pontos.lenght;i++)
    total += pontos[i];
if (maiorPonto < pontos [i]){
    maiorPonto = pontos [i];
}
 if (pontos [i] >= 90){
    numeroExcelente++;
 }
}
return `---Resumo da Rodada --- \n Total de ponto: ${total} \n  Maior Pontuação: ${maiorPonto} \n Jogadores com Desempenho Excelente: ${numeroExcelente} \n ---------------`

}

let arrayPontos = [50,98,92,54,36,100]
console.log(analisarDesempenho(arrayPontos));
