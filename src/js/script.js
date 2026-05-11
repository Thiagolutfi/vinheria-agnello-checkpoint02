
function validarTexto(msg) {
    let entrada = prompt(msg);
    while (!entrada) {
        entrada = prompt("Digite uma palavra:");
    } 
    return entrada;
}

function validarNumero(msg) {
    let valor = prompt(msg);
    while (isNaN(valor) || valor === "") {
        valor = prompt("Digite um número válido: ");
    }
    return Number(valor);
}

function verificarEstoque(qtd) {
    return qtd < 5;
}

function classificarVinho(anos) {
    if (anos <= 2023) {
        return "Vinho Jovem";
    } else if (anos <= 2020) {
        return "Vinho Amadurecido";
    } else {
        return "Vinho Antigo";
    }   
}

function mostrarDados(nome, ano, qtd) {
    let tipo = classificarVinho(ano);
    let aviso = verificarEstoque(qtd) ? "Estoque baixo!" : "Estoque ok";

    console.log("Nome:", nome);
    console.log("Ano:", ano);
    console.log("Quantidade:", qtd);
    console.log("Classificação:", tipo);
    console.log(aviso);

    alert(nome + " cadastrado!\n" + aviso);
}



let vinhoMaisAntigo = "";
let safraMaisAntiga = 9999;
let resposta ="sim";
let totalCadastrado = 0; 
let totalEstoqueBaixo = 0;
// ******while (enquanto a respota for "sim" continua)*********

//*****contar total cadastrados ******

//     contar vinhos que estao em baixo estoque
if (verificarEstoque(quantidade) === "Estoque Baixo") {
    estoqueBaixo++;
}

//achar o ano mais antigo dos vinhos e o nome dele tbm
if (ano < safraMaisAntiga) {
    safraMaisAntiga = ano;
    vinhoMaisAntigo = nome;
}

//no do while final perguntar se deseja cadastrar outro
resposta = prompt("Deseja cadastrar outro? (sim/nao)")
//fim do while




//Sintese dos Vinhos
//um console.log colocando: Total de cadastros, vinhos em estoque baixo e o vinho mais antigo
console.log(
    "RELATÓRIO FINAL" +
    "\nTotal de cadastros: " + totalCadastros + "" +
    "\nVinhos com estoque baixo: " + totalEstoqueBaixo +
    "\nVinho mais antigo: " + vinhoMaisAntigo 
);