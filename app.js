//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos);
        //limpa o input
        document.getElementById('amigo').value = "";
        //redefine o campo de entrada para uma string vazia
        document.getElementById('amigo').placeholder = "";
    }
}