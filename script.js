// Seleciona o formulário e adiciona um listener para o evento de submit
document.getElementById("dataForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores das datas do formulário
    const data1 = new Date(document.getElementById("data1").value);
    const data2 = new Date(document.getElementById("data2").value);

    // Variável para armazenar a data maior entre as duas
    let maior;

    // Compara as datas para determinar a maior
    if (data1.getTime() > data2.getTime()) {
        maior = data1;
    } else {
        maior = data2;
    }

    // Calcula o intervalo em dias entre as duas datas
    const intervalo = Math.abs(Math.ceil((data2 - data1) / (1000 * 60 * 60 * 24)));

    // Obtém a data atual formatada
    const atual = obterDataFormatada(new Date());

    // Exibe o resultado na página
    exibirResultado(maior, intervalo, atual);
});

// Função para obter a data atual formatada
function obterDataFormatada(data) {
    const hora = padLeft(data.getHours());
    const minuto = padLeft(data.getMinutes());
    const dia = padLeft(data.getDate());
    const mes = padLeft(data.getMonth() + 1); // +1 porque os meses começam em 0
    const ano = data.getFullYear();

    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

// Função para adicionar um zero à esquerda se o número for menor que 10
function padLeft(numero) {
    return numero < 10 ? "0" + numero : numero;
}

// Função para exibir o resultado na página
function exibirResultado(maiorData, intervaloDias, dataAtual) {
    document.getElementById("resultado").innerHTML = `
        Maior data: ${maiorData.toLocaleDateString()}<br>
        Intervalo em dias: ${intervaloDias}<br>
        Data Atual: ${dataAtual}
    `;
}
