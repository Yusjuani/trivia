//const name = prompt("¿Cual es tu nombre?");
const button = document.getElementById("button")
button.addEventListener("click", ()=>{
  alert("Bienvenid@ " +  " a tu desafio");
  inicio()
  
  }
)

 function Trivia(block , none){
  document.getElementById(block).style.display = "block";
  document.getElementById(none).style.display = "none"; 

}

function correcta(){
  if("correcta" == "correcta") { 
alert("Felicidades respuesta correcta");


}}
function incorrecta(){
  if("incorrecta" == "incorrecta") { 
alert("Respuesta incorrecta");

}}

function inicio(){
  setTimeout(()=>{
    
    alert("Ha terminado tu tiempo, tocan las penitencias");
  
  },30000)

  }






