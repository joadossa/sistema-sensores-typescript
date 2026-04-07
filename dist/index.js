const sensorMotorA = {
    id: 1,
    nome: "Motor A - Linha 1",
    tipo: "TEMPERATURA",
    limiteMinimo: 10,
    limiteMaximo: 80,
    ativo: true,
};
const sensorPressaoB = {
    id: 2,
    nome: "Sistema Hidráulico B",
    tipo: "PRESSAO",
    limiteMinimo: 30,
    limiteMaximo: 120,
    ativo: true,
};
function criarMedicao(id, sensor, valor, data) {
    let status = "normal";
    if (valor < sensor.limiteMinimo || valor > sensor.limiteMaximo) {
        status = "alerta";
    }
    if (valor > sensor.limiteMaximo * 1.2) {
        status = "critico";
    }
    return {
        id,
        sensor,
        valor,
        data,
        status,
    };
}
function exibirMedicao(medicao) {
    return `
Medição #${medicao.id}
Sensor: ${medicao.sensor.nome}
Tipo: ${medicao.sensor.tipo}
Valor: ${medicao.valor}
Data: ${medicao.data.toLocaleString("pt-BR")}
Status: ${medicao.status}
`;
}
const medicao1 = criarMedicao(1, sensorMotorA, 75, new Date());
const medicao2 = criarMedicao(2, sensorMotorA, 95, new Date());
console.log("=== MEDIÇÃO 1 ===");
console.log(exibirMedicao(medicao1));
console.log("=== MEDIÇÃO 2 ===");
console.log(exibirMedicao(medicao2));
export {};
