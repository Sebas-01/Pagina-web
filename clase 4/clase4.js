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