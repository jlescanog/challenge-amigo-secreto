// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo').value;
    //verificar si el campo está vacío
    if  (amigoIngresado === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        listaAmigos.push(amigoIngresado);
        console.log(listaAmigos);   
    };
}

