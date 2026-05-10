//funções
//função para validar entrada de string (chamar como se fosse um prompt -> Exemplo: validarNumero("Nome do vinho: ")
function validarTexto(msg) {
    let entrada = prompt(msg);
    while (!entrada) {
        entrada = prompt("Digite uma palavra:");
    } 
    return entrada;
}

//função para validar entrada de numero (chamar como se fosse um prompt -> Exemplo: validarNumero("Quantidade: "))
function validarNumero(msg) {
    let valor = prompt(msg);
    while (isNaN(valor) || valor === "") {
        valor = prompt("Digite um número válido: ");
    }
    return Number(valor);
}

//  para ver se o estoque baixo (< 5)
function verificarEstoque() {
    let quantidade = prompt("Digite a quantidade de estoque:");

    if (quantidade < 5){
        return "Estoque baixo";
    } else {
        return "Estoque OK";
    }
}

let statusEstoque = verificarEstoque();
alert(`Status do estoque: ${statusEstoque}`);

//  para classificar o Vinho 
// (se o ano >= 2023 = Jovem, >= 2016 = Amadurecido e depois disso é Antigo)
function classificarVinho() {
    let anos = prompt("Digite a idade do vinho:");

    if (anos <= 2) {
        return "Vinho Jovem";
    } else if (anos <= 5) {
        return "Vinho Amadurecido";
    } else {
        return "Vinho Antigo";
    }   
}

let classificacaoVinho = classificarVinho();
alert(`Classificação do vinho: ${classificacaoVinho}`);

//Programa principal -> 
// while (enquanto a respota for "sim" continua, entao tem que criar uma variavel com conteudo "sim" para rodar)
//     adicionar uma variavel contadora dos vinhos cadastrados 
let totalCadastrado = 0; 
//     contar vinhos que estao em baixo estoque (fazer um if utilizando a função do estoque baixo)
let totalEstoqueBaixo = 0;
    if (verificarEstoque(quantidade) === "Estoque Baixo") {
        estoqueBaixo ++;
    }
//     achar o ano mais antigo dos vinhos e o nome dele tbm
//     no final perguntar se deseja cadastrar outro (usando a mesma variavel do while)


//Sintese dos Vinhos
//um console.log colocando: Total de cadastros, vinhos em estoque baixo e o vinho mais antigo