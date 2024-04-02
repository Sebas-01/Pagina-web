/*//Arreglos

let varios=[1,"juan","bogota",20.45,true];
// en consola el tamaño del arreglo
console.log(varios.length);
console.log(varios[0]);
//agregar un solo valor
varios.push(30);
//saco un elemento, en este caso el ultimo
varios.pop();
let enteros = [1,2,3,4,5,6,7];
//concatenar
let concat = varios.concat(enteros);
console.log(concat);
//agregar al inicio
let inicio = concat.unshift("inicio");
//quitar el primero
concat.shift();

//const arregloUno = inicio; no se puede modificar los arreglos al guardarlo en un conts

//recorrer arreglo
for(i =0; i<varios.length; i++);{
    console.log(varios[i]);
}

varios.forEach(elemento => {
    console.log(elemento);
});

//.reduce()

let numeros = [100,35,63,25,2];
let resultado = numeros.reduce((acumulador,valorActual)=>{
    return acumulador + valorActual;
});

console.log(resultado);

//.filtrar
let filtrado = numeros.filter(numero=>{
    return numero>30;
});
console.log(filtrado); 
//.starwhith  .endwhith

let paises =["colombia", "congo", "chicago", "brasil","mexico","madrid"];

let filtered = paises.filter(pais=>{
    return pais.endsWith("o");
})
console.log(filtered);

//.map()
const saludarPais = paises.map(country=>{
    return "Bienvenidos pasajeros a "+ country;
});
console.log(saludarPais);*/
//-------------------------------------------------------
const Edades = () => [11,23,13,44,15,16,57];

const numeritos = Edades();
console.log(numeritos);

let filtrar_edades = numeritos.filter(edad=>{
    return edad >= 18;

});
console.log(filtrar_edades);
//------------------------------------------------------------

const llenarVector = (tamaño,valores) =>{
    const Vec=[];
    for(i=0; i<tamaño; i++){
        Vec.push(valores * i)
    }
    return Vec;
};
const vector = llenarVector(5,100)

console.log(vector);

let resultado = vector.reduce ((Acumulador,nuemroActual)=>{
    return (Acumulador + nuemroActual) -3;
})

console.log(resultado);
//-----------------------------------------------------------

const Nombres = () => ["pedro","alvaro","santiago","antonella","martin","pepe"]

const names = Nombres();
console.log(names)


let Saludo = names.map(nombre =>{
     
    if(nombre.startsWith("a")){
        return "Hola, un gusto saludarte " + nombre;
    }
    else{
        return "Hola " + nombre + " es un placer saludarte";
    }
    
});
console.log(Saludo)
//-------------------------------------------
const numeroAleatorio = (size, numMinimo, numMaximo)=>{
    const numbers =[];
    for(i=0; i<size;i++){
        numbers.push(Math.floor(Math.random() * (numMaximo - numMinimo +1)) + numMinimo)
    }

    return numbers;
};
const numAleatorio = numeroAleatorio(5,1,100)
console.log(numAleatorio);

let ordenado = numAleatorio.concat(numeritos);
console.log(ordenado);
for(a=0; a<ordenado.length; a++){
    for(b=0; b<ordenado.length -1;b++){
        if(ordenado[b]<ordenado[b+1]){

            let Aux = ordenado[b];
            ordenado[b]=ordenado[b+1];
            ordenado[b +1] = Aux;
        }
    }
}
console.log(ordenado);

let Multiplos2 = ordenado.filter(multiplo =>{

    return multiplo % 2 == 0;
    
});
console.log(Multiplos2);

const Array = [13,4,2,6,16,98,1,34,10];
const sumArray = () => {
    let suma=0;
    for(let i=0;i < Array.length; i++){
        suma += Array[i];
    }
    return suma;
};

console.log(sumArray());

const filterEvenNumbers = () => {
    //const Arreglo = [1,2,3,4,5,6,7,8,9,10];
    return Array.filter(numero => numero % 2==0)
};
//const numPar = filterEvenNumbers();
console.log(filterEvenNumbers());

const findMaxNumber = () => {
    let numMayor = 0;

    for(i=0; i<Array.length; i++){
        if(Array[i]>numMayor){
            numMayor=Array[i];
        }
    }

    return numMayor
};

console.log(findMaxNumber());

const String = ["sebastian","antonella","gabriella","isabella"]
const toUpperCaseStrings = () => {
    return String.map(string => string.toUpperCase())
};
console.log(String)
console.log(toUpperCaseStrings());

const calculateAverage = () => {
    let Suma = Array.reduce((acumulador, valorActual) => acumulador+valorActual);
    return Suma/Array.length;
};
console.log(calculateAverage());

const sortNumbersAscending = () => {
    return Array.sort((a,b)=>a-b);
};
console.log(sortNumbersAscending());

const findFirstElement = () => {
    const condicion = (number)=> number %2 == 0; 
    for(i=0;i<Array.length;i++)
    {
        if(condicion(Array[i])){
            return true;   
        }        
    }
    return undefined;
};

console.log(findFirstElement());

const countElements = () => {
    return Array.length
};
console.log(countElements());

const concatenateArrays = () => {
    let concatenado = Array.concat(String)
      return concatenado
  };
  console.log(concatenateArrays());

  const squareNumbers = () => {
    return Array.map(cuadrados => cuadrados **2);
};
console.log(squareNumbers(
    
));

const agregarHabilidad = (jugador, nuevaHabilidad) => {
    /*
    Parámetros de entrada:
    - jugador: objeto que representa al jugador del juego.
    - nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.

    Lo que hace la función:
    Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
    Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
    Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe

    Valor de retorno:
    Retorna el objeto jugador modificado con la nueva habilidad agregada.
    */
    if (!jugador.hasOwnProperty('habilidades')) {
        jugador.habilidades = [];
    }
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        jugador.habilidades.push(nuevaHabilidad);
    }
    
    return jugador;
   
};

const player1 = {
    nombre : "Sebastian",
    habilidades : ["saltar", "correr"]
}
const player2 = {
    nombre : "Pancho"
    
}

console.log(agregarHabilidad(player1,"volar"));
console.log(agregarHabilidad(player2,"invisibilidad"));
console.log(agregarHabilidad(player1,"volar"));

const peliculas = [
    {titulo:"interstellar", duracion : 144, genero:"ficcion",añoLanzamiento:"2014", calificacion : 5},
    {titulo:"harry potter 4", duracion : 120, genero:"fantasia",añoLanzamiento:"2004", calificacion : 4},
    {titulo:"el irlandes", duracion : 180, genero:"biopic",añoLanzamiento:"2018", calificacion : 4.5},
    {titulo:"oppenheimmer", duracion : 180, genero:"biopic",añoLanzamiento:"2023", calificacion : 5},
    {titulo:"mente indomable", duracion : 90, genero:"drama",añoLanzamiento:"1970", calificacion : 4},
    {titulo:"codigo da-vinci", duracion : 100, genero:"historia",añoLanzamiento:"2007", calificacion : 3.5},
]
const calcularDuracionTotal = (peliculas) => {
    let duracionTotal = 0;

    for(pelicula of peliculas){

        if(pelicula.hasOwnProperty("duracion")){
            duracionTotal+= pelicula.duracion;
        }
    }

    return duracionTotal;
};
console.log(calcularDuracionTotal(peliculas));

const buscarPeliculas = (peliculas, titulo, genero) => {
    return peliculas.filter(pelicula => {
        
        const tituloEnMinusculas = pelicula.titulo.toLowerCase();
        const generoEnMinusculas = pelicula.genero.toLowerCase();
        
        return tituloEnMinusculas.includes(titulo.toLowerCase()) && generoEnMinusculas.includes(genero.toLowerCase());
    });
};
console.log(buscarPeliculas(peliculas,"indomable","drama"));

const calcularPromedioPuntajes = (peliculas) => {
    const puntajeTotal = peliculas.reduce((acumulador,pelicula) => {
     return acumulador+pelicula.calificacion;
    },0);
   return puntajeTotal/peliculas.length;
};

const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento.
    return peliculas.filter(pelicula =>pelicula.añoLanzamiento>año);
};
console.log(filtrarPorAño(peliculas,2006));

const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    
    const peliculasDelGenero = peliculas.filter(pelicula => pelicula.genero.toLowerCase() == genero.toLowerCase());
    if (peliculasDelGenero.length == 0) {
        return 0;
    }

    const duracionTotal = peliculasDelGenero.reduce((acumulador, pelicula) => {
        return acumulador + pelicula.duracion;
    }, 0);
    
    return duracionTotal / peliculasDelGenero.length;
};

console.log(calcularPromedioDuracionPorGenero(peliculas,"biopic"));

class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año de fabricación del vehículo.
     */
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    /**
     * Método para obtener la información del vehículo.
     * @returns {string} - La información del vehículo en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Vehículo: ${this.marca}- Modelo: ${this.modelo} - Año: ${this.año}`;
    }
}

