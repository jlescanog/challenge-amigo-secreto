// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let amigoIngresado = inputAmigo.value;
    // Verifica si el campo está vacío
    if (amigoIngresado === "") {  
        alert("Por favor, inserte un nombre.");
    } else {
        listaAmigos.push(amigoIngresado);
        console.log(listaAmigos);
        inputAmigo.value = "";  // Limpia el campo de entrada
    }
}


