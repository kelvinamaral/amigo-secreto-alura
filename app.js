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


        //atualiza a lista de amigos na tela
        atualizarLista();

    }

    //atualizar lista de amigos
    function atualizarLista() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = ""; // Limpa a lista para evitar duplicações

        for (let i = 0; i < amigos.length; i++) {
            let itemListaAmigos = document.createElement('li'); // Cria um novo elemento <li>
            itemListaAmigos.textContent = amigos[i];
            lista.appendChild(itemListaAmigos);
        }
    }


}
