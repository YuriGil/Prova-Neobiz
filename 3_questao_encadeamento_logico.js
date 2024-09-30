// Tabela de consumo (10 anos de dados, cada linha é um ano e cada coluna é um mês)
var consumo = [
    [200, 180, 210, 220, 250, 240, 260, 230, 270, 290, 300, 280], // 2010
    [220, 190, 200, 230, 260, 250, 270, 240, 290, 310, 320, 300], // 2011
    [210, 200, 220, 240, 270, 260, 280, 250, 300, 320, 330, 310], // 2012
    [230, 210, 240, 250, 280, 270, 290, 260, 310, 330, 340, 320], // 2013
    [240, 220, 250, 260, 290, 280, 300, 270, 320, 340, 350, 330], // 2014
    [250, 230, 260, 270, 300, 290, 310, 280, 330, 350, 360, 340], // 2015
    [260, 240, 270, 280, 310, 300, 320, 290, 340, 360, 370, 350], // 2016
    [270, 250, 280, 290, 320, 310, 330, 300, 350, 370, 380, 360], // 2017
    [280, 260, 290, 300, 330, 320, 340, 310, 360, 380, 390, 370], // 2018
    [290, 270, 300, 310, 340, 330, 350, 320, 370, 390, 400, 380]  // 2019
];

//Calcular o consumo médio de cada mês ao longo dos 10 anos
var mediaMensal = [];
for (var mes = 0; mes < 12; mes++) {
    var soma = 0;
    for (var ano = 0; ano < 10; ano++) {
        soma += consumo[ano][mes];
    }
    mediaMensal[mes] = soma / 10; // Média do mês
}

// Exibir o consumo médio de cada mês
console.log("Consumo médio por mês ao longo de 10 anos:");
for (var mes = 0; mes < 12; mes++) {
    console.log(`Mês ${mes + 1}: ${mediaMensal[mes].toFixed(2)} kWh`);
}

// Encontrar o mês/ano de maior consumo
var maiorConsumo = consumo[0][0];
var anoMaiorConsumo = 2010;
var mesMaiorConsumo = 1;

for (var ano = 0; ano < 10; ano++) {
    for (var mes = 0; mes < 12; mes++) {
        if (consumo[ano][mes] > maiorConsumo) {
            maiorConsumo = consumo[ano][mes];
            anoMaiorConsumo = 2010 + ano;
            mesMaiorConsumo = mes + 1;
        }
    }
}

// Exibir o mês/ano de maior consumo
console.log(`Maior consumo: ${maiorConsumo} kWh no mês ${mesMaiorConsumo}/${anoMaiorConsumo}`);
