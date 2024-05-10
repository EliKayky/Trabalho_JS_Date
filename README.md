Aqui está uma explicação para cada função no código:

1. **addEventListener("submit", function (event) {...})**: Esta função adiciona um ouvinte de evento ao formulário com o id "dataForm". Quando o formulário é submetido, a função dentro dela é executada. O parâmetro `event` representa o evento de submissão do formulário.

2. **event.preventDefault()**: Esta linha previne o comportamento padrão de submissão do formulário, ou seja, evita que a página seja recarregada quando o formulário é submetido.

3. **const data1 = new Date(document.getElementById("data1").value)**: Esta linha cria um objeto Date com o valor do campo de entrada com o id "data1" do formulário. Isso converte a entrada de texto em uma data.

4. **const data2 = new Date(document.getElementById("data2").value)**: Similar ao anterior, cria um objeto Date com o valor do campo de entrada com o id "data2".

5. **let maior**: Declara uma variável chamada `maior` para armazenar a data maior entre `data1` e `data2`.

6. **if (data1.getTime() > data2.getTime()) {...} else {...}**: Compara as datas `data1` e `data2` para determinar qual é maior. Se `data1` for maior que `data2`, a `maior` é definida como `data1`, caso contrário, é definida como `data2`.

7. **const intervalo = Math.abs(Math.ceil((data2 - data1) / (1000 * 60 * 60 * 24)))**: Calcula o intervalo em dias entre `data1` e `data2`. A diferença entre as datas é dividida pelo número de milissegundos em um dia para obter o intervalo em dias. `Math.abs()` garante que o resultado seja sempre positivo.

8. **const atual = obterDataFormatada(new Date())**: Chama a função `obterDataFormatada()` passando a data atual como argumento. Isso obtém a data atual formatada.

9. **document.getElementById("resultado").innerHTML = `...`**: Exibe o resultado na página HTML. Substitui o conteúdo do elemento com o id "resultado" com a string HTML fornecida.

10. **function obterDataFormatada(data) {...}**: Esta função recebe um objeto Date como argumento e retorna uma string formatada da data no formato "HH:MM - DD/MM/AAAA". Ela extrai a hora, minuto, dia, mês e ano da data e os formata conforme necessário.

11. **function padLeft(numero) {...}**: Esta função recebe um número como argumento e adiciona um zero à esquerda se o número for menor que 10. Isso garante que números menores que 10 tenham dois dígitos, como 01, 02, 03, etc.

12. **function exibirResultado(maiorData, intervaloDias, dataAtual) {...}**: Esta função recebe três argumentos: a data maior, o intervalo em dias e a data atual formatada. Ela constrói uma string HTML com esses valores e a insere no elemento com o id "resultado" na página.
