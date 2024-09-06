

function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<h2>Digite uma finalidade, tipo ou nome de IA para iniciar a busca!</h2>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string para armazenar os resultados formatados
    let resultados = "";
    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    let tipo = "";
    let titulo = "";
    let exemploUso = "";
    let descricao = "";


    for (let dado of dados) {
        tipo = dado.tipo.toLowerCase();
        titulo = dado.titulo.toLowerCase();
        exemploUso = dado.exemploUso.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        // verificando se o texto da busca inclui nos dados
        if (tipo.includes(campoPesquisa) || titulo.includes(campoPesquisa) || exemploUso.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria um div para cada item do resultado
            resultados += `
        <div class="item-resultado">
            <h2><a href=${dado.link}
                target="_blank">${dado.titulo}<img class="linkExterno"
                src="assets/css/img/simbolo-de-link-externo.png" alt="link externo"></a></h2>
            <p class="descricao-meta">
            ${dado.descricao}
            </p>
            <p class="descricao-meta">
            <h3>Tipo:</h3>
            ${dado.tipo}
            </p>
            <p class="descricao-meta">
            <h3>Exemplo de uso:</h3>
            ${dado.exemploUso}
            </p>
        </div>
        `
        }
    }
    if (!resultados) {
        resultados = "<h2>Nada foi encontrado. Digite uma finalidade, tipo ou nome de IA para iniciar a busca! Ou tente escrever com acentos!</h2>"
    }
    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = resultados;
    document.getElementById('campo-pesquisa').value = '';
}