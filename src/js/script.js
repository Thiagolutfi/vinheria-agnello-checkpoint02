
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
    if (anos >= 2023) {
        return "Vinho Jovem";
    } else if (anos >= 2020) {
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

//while
while (resposta.toLowerCase() === "sim") {
    let nome = validarTexto("Nome do vinho:");
    let ano = validarNumero("Ano:");
    let quantidade = validarNumero("Quantidade:");

    //variavel contadora - totalCadastrado

    totalCadastrado++;    

    if (verificarEstoque(quantidade)) {
        totalEstoqueBaixo++;
    }

    if (ano < safraMaisAntiga) {
        safraMaisAntiga = ano;
        vinhoMaisAntigo = nome;
    }

    mostrarDados(nome, ano, quantidade);
    resposta = prompt("Deseja cadastrar outro? (sim/nao)");
}
    //fim while



//Sintese dos Vinhos
//um console.log colocando: Total de cadastros, vinhos em estoque baixo e o vinho mais antigo
console.log(
    "RELATÓRIO FINAL" +
    "\nTotal de cadastros: " + totalCadastrado+ "" +
    "\nVinhos com estoque baixo: " + totalEstoqueBaixo +
    "\nVinho mais antigo: " + vinhoMaisAntigo 
);