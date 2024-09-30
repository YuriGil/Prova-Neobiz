// Simulação dos dados da tabela fornecida
const dadosPagamentos = [
    { empresa: 'F', data: '01/05/2022', pago: 0 },
    { empresa: 'A', data: '03/04/2022', pago: 1 },
    { empresa: 'C', data: '04/04/2022', pago: 1 },
    { empresa: 'A', data: '06/06/2022', pago: 0 },
    { empresa: 'B', data: '20/06/2022', pago: 0 },
    { empresa: 'B', data: '21/06/2022', pago: 1 },
    { empresa: 'I', data: '01/05/2022', pago: 0 },
    { empresa: 'F', data: '03/04/2022', pago: 1 },
    { empresa: 'F', data: '04/04/2022', pago: 1 },
    { empresa: 'F', data: '06/06/2022', pago: 0 },
    { empresa: 'C', data: '20/06/2022', pago: 0 },
    { empresa: 'A', data: '21/06/2022', pago: 1 },
    { empresa: 'C', data: '12/03/2022', pago: 1 },
    { empresa: 'C', data: '14/07/2022', pago: 1 },
    { empresa: 'B', data: '12/07/2022', pago: 0 },
    { empresa: 'I', data: '15/07/2022', pago: 1 },
    { empresa: 'I', data: '16/06/2022', pago: 0 },
    { empresa: 'A', data: '10/05/2022', pago: 0 },
    { empresa: 'B', data: '12/03/2022', pago: 1 }
];

// Função para calcular a média de pagamentos por empresa
function calcularMediaPagamentos(dados) {
    const pagamentosPorEmpresa = {};

    // Iterar sobre os dados para acumular informações de pagamento
    dados.forEach(item => {
        if (!pagamentosPorEmpresa[item.empresa]) {
            pagamentosPorEmpresa[item.empresa] = { total: 0, pagos: 0 };
        }
        pagamentosPorEmpresa[item.empresa].total++;
        pagamentosPorEmpresa[item.empresa].pagos += item.pago;
    });

    // Calcular a média por empresa
    const medias = Object.keys(pagamentosPorEmpresa).map(empresa => {
        const { total, pagos } = pagamentosPorEmpresa[empresa];
        return { empresa, media: pagos / total };
    });

    // Classificar as empresas com base na média (maior para menor)
    medias.sort((a, b) => b.media - a.media);

    return medias;
}

// Gerar o ranking
const ranking = calcularMediaPagamentos(dadosPagamentos);

// Exibir o ranking
console.log("Ranking de bons pagadores:");
ranking.forEach((empresa, index) => {
    console.log(`${index + 1}º - Empresa ${empresa.empresa}: Média de Pagamentos = ${(empresa.media * 100).toFixed(2)}%`);
});
