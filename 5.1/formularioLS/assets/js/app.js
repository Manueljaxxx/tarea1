//variables
const ListaTweets = document.getElementById('lista-tweets');
//Event Listeners
eventListeners();
function eventListeners(){
     //cuando se envia al formulario
     document.getElementById('formulario').addEventListener('submit', agregarFormulario);
     //borrar tweets
     ListaTweets.addEventListener('click', borrarTweet);
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
     //Añadir a LocalStorage
     añadirTweetLocalStorage(tweet);
}
//Elimina el Tweet del DOOM
function borrarTweet(e){
     e.preventDefault();
     if(e.target.className === 'boton-borrar'){
          console.log(e.target.parentElement.remove());
     }
}
//Agregar Tweet a local storage
function añadirTweetLocalStorage(tweet){
     let tweets;
     tweets = obtenerTweetsLocalStorage();
     //añadir nuevo tweet
     tweets.push(tweet);
     // convertir de string a arreglo para LocalStorage
     localStorage.setItem('tweet', JSON.stringify(tweets));
}
//Metodos de Arreglos
function obtenerTweetsLocalStorage(){
     let tweets1;
     if(localStorage.getItem('tweet') === null){
          tweets1 = [];
     }else{
          tweets1 = JSON.parse(localStorage.getItem('tweet'));
     }
     return tweets1;
}