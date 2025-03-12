// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let amigoIngresado = inputAmigo.value;
    // Verifica si el campo está vacío
    if (amigoIngresado === "") {  
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigoIngresado);
        console.log(amigos);
        inputAmigo.value = "";  // Limpia el campo de entrada
        actualizarLista();
    };
}

function actualizarLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; //limpia lista antes de agregar mas elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    };
}

function sortearAmigo() {
    if (amigos.length > 0) { 
        sorteaNumero();
    };
}

function sorteaNumero() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice válido
    let amigoSorteado = amigos[indiceAleatorio]; // Obtiene el amigo en esa posición
    
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpia la lista antes de mostrar el nuevo resultado

    let li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultadoLista.appendChild(li); // Agrega el resultado a la lista <ul>
}