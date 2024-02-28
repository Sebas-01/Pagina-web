//Arreglos

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
console.log(saludarPais);

const numbers = () => [1,2,3,4,5,6,7,8,9];

const numeritos = numbers();
console.log(numeritos);
