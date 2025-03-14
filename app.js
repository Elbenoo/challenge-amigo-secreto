// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//En este punto se le agregara un nuevo amigo al array de amigos.
//Se validara que el nombre no se encuentre vacío antes de agregarlo y se actualizara.

let amigos = [];

function agregarAmigo() {
  let escogeNombreAmigo = document.getElementById("amigo").value;

  if (escogeNombreAmigo.trim() === "") {
    alert("Invalido, Favor de ingresar un nombre");
  } else {
    amigos.push(escogeNombreAmigo);
        document.querySelector("#amigo").value = "";
        generarListaAmigo();
  }
}

//Aqui se actualiza la lista de amigos y asi se va creando los elementos de la lista.
function generarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let lista = document.createElement("li");
    lista.textContent = element;
    listaAmigos.appendChild(lista);
  }
}

//Aqui es donde escribimos un amigo y se nos devolvera un amigo de manera aleatoria.
function sortearAmigo() {
  let generarAmigos = amigos.length;
  if (generarAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let listaAmigo = Math.floor(Math.random() * generarAmigos);
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = amigos[listaAmigo];
  }
}