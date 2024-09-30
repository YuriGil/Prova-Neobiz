// Dados fornecidos (empresas, lançamentos e status de pagamento)
const dados = [
    { empresa: 'F', lancamento: '01/05/2022', pago: 0 },
    { empresa: 'A', lancamento: '03/04/2022', pago: 1 },
    { empresa: 'C', lancamento: '04/04/2022', pago: 1 },
    { empresa: 'A', lancamento: '06/06/2022', pago: 1 },
    { empresa: 'B', lancamento: '20/06/2022', pago: 0 },
    { empresa: 'B', lancamento: '21/06/2022', pago: 0 },
    { empresa: 'I', lancamento: '01/05/2022', pago: 1 },
    { empresa: 'I', lancamento: '03/04/2022', pago: 0 },
    { empresa: 'F', lancamento: '04/04/2022', pago: 1 },
    { empresa: 'F', lancamento: '06/06/2022', pago: 0 },
    { empresa: 'A', lancamento: '20/06/2022', pago: 0 },
    { empresa: 'C', lancamento: '21/06/2022', pago: 0 },
    { empresa: 'C', lancamento: '12/03/2022', pago: 1 },
    { empresa: 'C', lancamento: '14/07/2022', pago: 1 },    
    { empresa: 'C', lancamento: '15/07/2022', pago: 1 },
    { empresa: 'B', lancamento: '12/07/2022', pago: 0 },
    { empresa: 'I', lancamento: '15/07/2022', pago: 1 },
    { empresa: 'I', lancamento: '16/06/2022', pago: 1 },
    { empresa: 'A', lancamento: '10/05/2022', pago: 0 },
    { empresa: 'B', lancamento: '12/03/2022', pago: 1 },
  ];
  
  // Função para calcular a média de pagamentos por empresa
  function calcularMediaPagamentos(dados) {
    const pagamentosPorEmpresa = {};
  
    // Contabilizar pagamentos e total de registros por empresa
    dados.forEach(({ empresa, pago }) => {
      if (!pagamentosPorEmpresa[empresa]) {
        pagamentosPorEmpresa[empresa] = { totalPagamentos: 0, totalRegistros: 0 };
      }
      pagamentosPorEmpresa[empresa].totalPagamentos += pago;
      pagamentosPorEmpresa[empresa].totalRegistros += 1;
    });
  
    // Calcular média para cada empresa
    const mediaPorEmpresa = Object.keys(pagamentosPorEmpresa).map(empresa => {
      const { totalPagamentos, totalRegistros } = pagamentosPorEmpresa[empresa];
      const media = totalPagamentos / totalRegistros;
      return { empresa, media };
    });
  
    // Ordenar empresas por média de pagamentos (maior para menor)
    mediaPorEmpresa.sort((a, b) => b.media - a.media);
  
    return mediaPorEmpresa;
  }
  
  // Executar a função e obter o ranking
  const ranking = calcularMediaPagamentos(dados);
  
  // Exibir o ranking no console
  console.log('Ranking de Pagamentos:');
  ranking.forEach(({ empresa, media }, index) => {
    console.log(`${index + 1}. Empresa: ${empresa}, Média de Pagamentos: ${media.toFixed(2)}`);
  });
  