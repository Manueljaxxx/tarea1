//variables
const ListaTweets = document.getElementById('lista-tweets');
//Event Listeners
eventListeners();
function eventListeners(){
     //cuando se envia al formulario
     document.getElementById('formulario').addEventListener('submit', agregarFormulario);
}
//funciones
//agregar formulario
function agregarFormulario(e){
     e.preventDefault();
     //leer el valor de textArea
     const tweet = document.getElementById('tweet').value;
     //crear boton de eliminar
     const botonBorrar = document.createElement('a');
     botonBorrar.className = 'boton-borrar';
     botonBorrar.innerText = ' X';

     //crear elemento y añadir contenido a la lista
     const li = document.createElement('li');
     li.innerText  = tweet;
     //para mandarlo al doom
     //añade el boton borrar al tweet
     li.appendChild(botonBorrar);
     //añade el tweet a la lista
     ListaTweets.appendChild(li);
}