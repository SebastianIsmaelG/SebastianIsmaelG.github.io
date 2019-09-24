//Declaraciones init
function muestra_oculta(id){
   if (document.getElementById){ //se obtiene el id
   var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
   el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
   }
}       
   window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
   muestra_oculta('contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

function maquina(contenedor,texto,intervalo){
    // Calculamos la longitud del texto
    longitud = texto.length;
    // Obtenemos referencia del div donde se va a alojar el texto.
    cnt = document.getElementById(contenedor);
    var i=0;
    // Creamos el timer
    timer = setInterval(function(){
       // Vamos añadiendo letra por letra y la _ al final.
       cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
       // Si hemos llegado al final del texto..
       if(i >= longitud){
          // Salimos del Timer y quitamos la barra baja (_)
          clearInterval(timer);
          cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
          return true;
       } else {
          // En caso contrario.. seguimos
          i++;
       }},intervalo);
 };
 
 var texto = "Front/Back-End Developer";
 // 100 es el intervalo de minisegundos en el que se escribirá cada letra.
 maquina("maquinas",texto,100);




