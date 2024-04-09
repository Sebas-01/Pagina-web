/*import { crearDiv } from "./div.js";
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

let pCSS = document.getElementById("hola")
pCSS.style.color = "purple";*/

/*const h1Element = document.createElement('h1');
h1Element.innerHTML="LUGARES A VISITAR";
h1Element.id = "titulo";

document.body.appendChild(h1Element);*/

const mainElemet = document.createElement('main');
mainElemet.id= "principal";

const navElement = document.createElement('nav');
navElement.id= "navegar";

const lugares = ["alphes","baviera","dolimitas","meteora","rocosas"];
const nombres = ["APLHES","BAVIERA","DOLOMITAS","METEORA","ROCOSAS"];

for (var i=0; i<lugares.length; i++);{

    const aElemnet = document.createElement('a');
    aElemnet.href = "#" + lugares[i];
    aElemnet.id= "nav";
    aElemnet.innerHTML = nombres[i];

    navElement.appendChild(aElemnet);
};

mainElemet.appendChild(navElement);

let seccion = document.createElement('section');
mainElemet.appendChild(seccion);

const headerElement = document.createElement('header');
headerElement.id="encabezado";

const h1Element = document.createElement('h1');
h1Element.innerHTML = "LUGARES A VISITAR";

headerElement.appendChild(h1Element);
mainElemet.appendChild(headerElement);

const sections = [
    {
       name: "alphes",
       imgSrc: "../Pictures/alphes_suiza.jpg",
       imgAlt: "alphes_suiza-photo",
       lugar: "ALPHES SUIZOS",
       ubicacion:"Suiza",
       descripcion: "Todo el sistema montañoso de los Alpes tiene más de 1.200 kilómetros de longitud y está completamente ubicado en el continente europeo. Algunos picos están a más de 3.500 metros sobre el nivel del mar y hay más de 1.200 glaciares. La cota de nieve es de unos 2400 metros, por lo que hay muchos lugares para el turismo de nieve. Los picos están permanentemente cubiertos de nieve, formando grandes glaciares, y la altitud se mantiene por encima de los 3.500 metros."
    },

    {
        name: "baviera",
        imgSrc: "../Pictures/baviera_alemania.jpg",
        imgAlt: "baviera_alemania-photo",
        lugar: "BAVIERA",
        ubicacion:"Alemania",
        descripcion: "En el sur de Alemania, el Estado Libre de Baviera, con su capital Munich, se presenta con una belleza paisajística similar a la de un libro de fotos. Una naturaleza intacta, aire saludable, riqueza cultural y el proverbial y acogedor estilo de vida bávaro son sus marcas registradas. Tanto si se trata de un festival de trajes tradicionales como de un festival de ópera, los castillos y ciudades medievales, los magníficos palacios y las iglesias barrocas son el escenario perfecto para ello, junto con las metrópolis bávaras. Tradición y modernidad en armonía."
    },

    {
        name: "dolomitas",
        imgSrc: "../Pictures/dolomitas_italia.jpg",
        imgAlt: "dolomitas_italia-photo",
        lugar: "Dolomitas",
        ubicacion:"Italia",
        descripcion: "Los Dolomitas son una serie de grupos montañosos de los Alpes orientales italianos caracterizados por su composición casi total de dolomía, roca formada principalmente por el mineral dolomita. Este último da el famoso color pálido. El complejo montañoso cubre más de 140 000 hectáreas y se extiende por tres regiones y cinco provincias (Trento, Bolzano, Belluno, Pordenone y Udine, con una pequeña parte en Austria: los Dolomitas de Lienz). Dolomitas se dice rápido... pero la cordillera es realmente extensa. Van desde los Dolomitas de Brenta hasta el grupo formado por el Catinaccio y el Latemar, desde los Dolomitas de Sesto hasta las Pale di San Martino, desde el macizo de la Marmolada hasta el grupo de Pelmo y Croda da Lago, para terminar con los más orientales, los Dolomitas Friulanos."
    },

    {
        name: "meteora",
        imgSrc: "../Pictures/meteora_grecia.jpg",
        imgAlt: "meteora_grecia-photo",
        lugar: "METEORA",
        ubicacion:"recia",
        descripcion: "El paisaje es abrumador: en medio de un valle, unos colosos de piedra se erigen a más de 600 metros del suelo, mirando a los ojos al sol. En sus cumbres, desafiando a la gravedad y al sentido común, se elevan monasterios de hasta siete siglos de antigüedad. Estamos en Meteora , uno de los panoramas más insólitos e inolvidables del mundo."
    },

    {
        name: "rocosas",
        imgSrc: "../Pictures/rocosas_canada.jpg",
        imgAlt: "rocosas_canada-photo",
        lugar: "ROCOSAS",
        ubicacion:"Canada",
        descripcion: "Los espacios y las distancias son enormes en este territorio alguna zona aún está por cartografiar, con poblaciones dispersas y dos carreteras: la Trans-Canada Highway (núm. 1) que cruza de este a oeste el país, y la Icefields Parkway (núm. 93) que circula de norte a sur. Esta última conecta las localidades y parques nacionales de Jasper y Banff, puntos de referencia en este viaje por las cinco grandes reservas entre las provincias de Alberta y Columbia Británica: Waterton, Banff, Kootenay, Yoho y Jasper. La diversidad de paisajes, fauna y flora que reúnen estos parques atrae a visitantes todo el año, en verano para disfrutar de sus lagos y rutas senderistas, en invierno para deslizarse por sus interminables laderas nevadas."
    }    
];

for (var i=0; i<sections.length; i++){
    const sectionElment = document.createElement('section');

    const imgElement = document.createElement('img');
    imgElement.src = sections[i].imgSrc;
    imgElement.alt= sections[i].imgAlt;
    imgElement.id ="imagenes";
    sectionElment.appendChild(imgElement);

    const h2Element = document.createElement('h2');
    h2Element.id="lugar";

    const pElement = document.createElement('p');
    pElement.innerHTML = sections[i].lugar;
    h2Element.appendChild(pElement);
    sectionElment.appendChild(h2Element);
     
    const pUbicacionElement = document.createElement('p');
    pUbicacionElement.id= "ubicacion";
    pUbicacionElement.innerHTML = sections[i].ubicacion;
    sectionElment.appendChild(pUbicacionElement);

    const pDescripcionElement = document.createElement('p');
    pDescripcionElement.id = "descripcion";
    pDescripcionElement.innerHTML = sections[i].descripcion;
    sectionElment.appendChild(pDescripcionElement);

    mainElemet.appendChild(sectionElment);
};

document.body.appendChild(mainElemet)