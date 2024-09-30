SELECT v.placa, v.cidade, v.estado
FROM Veiculo v
JOIN ResponsavelLegal r ON v.responsavel_id = r.id
WHERE r.nome = 'Joaquim Silva';
