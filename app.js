// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
-Obtener el valor del campo de entrada (input).
-Verificar si el usuario escribió algo (si está vacío, mostrar un mensaje).
-Crear un nuevo elemento <li> con el nombre ingresado.
-Agregar el <li> a la lista en <ul id="listaAmigos">.  
*/
let amigos = [];

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo'); // Capturar el input
    let nombreCapturado = nombreIngresado.value; // Obtener el texto ingresado

    if (nombreCapturado.length === 0) { // Validar si el campo está vacío
        alert(' ¡Ingrese un nombre!');
        return;
    }

    if (amigos.includes(nombreCapturado)) { // NO guardar nombres duplicados 
        alert(' Este nombre ya está en la lista.');
        return;
    }

    amigos.push(nombreCapturado); // Agregar a la lista el dato tomado con nombreIngresado.value;
    mostrarLista(); // Actualizar la lista en pantalla
    nombreIngresado.value = ''; // Limpiar el campo de entrada
}

function mostrarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement('li'); // Crear <li>
        nuevoElemento.textContent = amigos[i]; 
        listaAmigos.appendChild(nuevoElemento); // Agregar <li> a <ul>
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Validar si la lista está vacía
        alert(' No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSeleccionado = amigos[indiceAleatorio]; // 

    let resultado = document.getElementById('resultado');//Traemos el resuldado mediante getElementById
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSeleccionado}</strong> </li>`;// Se indica en el resultado el nombre de la posicion del amigo seleccionado
}
