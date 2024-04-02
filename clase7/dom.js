import { crearDiv } from "./div.js";
import { crearTrajeta } from "./tarjeta.js";
//poner el codigo html en javaScript
const contenido = `
<nav>
 <ul>
  <li>inicio</li>
  <li>nosotros</li>
  <li>rutas</li>
  <li>contactanos</li>
 </ul>
</nav>

`;

//manipular el DOM
//crearElemento()

//enviar al html
document.body.appendChild(crearDiv("Bienvenidos a nuestra pagina web"));
document.body.appendChild(crearTrajeta("VELENTIN","Hola mi nombre es valentin y este es mi portafolio"));
const division = document.createElement('p');
division.innerHTML ="Hello"
division.id ="hola";
document.body.appendChild(division);
//manipular el CSS
//let divCSS = document.getElementsByClassName("principal");
//divCSS.style.color = "purple";

let pCSS = document.getElementById("hola");
pCSS.style.color = "purple";