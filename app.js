// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables del proyecto
let amigoAgregado = "";
let listadoAmigos = [];
let listaAmigosUl = document.getElementById("listaAmigos");
let listaResultadoUl =  document.getElementById("resultado");

function agregarAmigo(){
    amigoAgregado = document.getElementById("amigo").value;
    //verifica si el campo de amigo secreto no está vacío
    if(amigoAgregado == ""){
        alert("el campo de amigo secreto, no puede estar vacío");
        return;
    }else{
        listadoAmigos.push(amigoAgregado);
        //agrega elemento li a la lista ul "listaAmigos"
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigoAgregado;
        listaAmigosUl.appendChild(nuevoAmigo);
        document.getElementById("amigo").value = "";
    }
}

function sortearAmigo(){
    //verifica si el arreglo de amigos está vacío
    if (listadoAmigos.length === 0) {
        alert("no se puede realizar el sorteo de amigo secreto porque no ha ingresado ninguno.");
        return;
    }
    //limpia lista resultado amigo secreto
    listaResultadoUl.innerHTML = "";
    //calcula largo del arreglo
    let largoArregloAmigos = listadoAmigos.length;
    //genera un numero aleatoreo de 0 a el largo del arreglo
    let posicionArreglo =  Math.floor(Math.random()*largoArregloAmigos-1)+1;
    //imprime la posición del arreglo en la lista ul de id "resultado"
    const nuevoResultado = document.createElement("li");
    nuevoResultado.textContent = "El amigo secreto es: "+String(listadoAmigos[posicionArreglo]);
    listaResultadoUl.appendChild(nuevoResultado);
    //vacía el arreglo de amigos
    listadoAmigos = [];
    //vaciar la lista ul de amigos
    listaAmigosUl.innerHTML = "";
    console.log(posicionArreglo);
}

//console.log(listadoAmigos);