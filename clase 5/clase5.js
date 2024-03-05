//callback funtions

let multiplicacion = (n1,n2) => n1*n2;

const pasarAgradosCentigrados = gradosFahrenheit => (5/9)*(gradosFahrenheit -32);

const imprimirGrados = (callbackFn,gradosFahrenheit) => {
    //paso la temperatura a grados centigrados
    let temperatura = callbackFn(gradosFahrenheit);
    console.log(temperatura);
}

imprimirGrados(pasarAgradosCentigrados,90);

//OBJETOS JavaScript
//Primera forma
const personas = {
     nombre:"sebastian",
     apellido: "vettel",
     edad: 22,
     //una propiedad que es un objeto
     caracteristicas :{
           colorCabello: "negro",
           colorOjos: "azul",
           estartura: 1.75,
           nacionalidad: "española"
     }
}

//segunda froma
const person ={}
person.nombre = "sebastian";
person.apellido = "vettel";
person.edad = 22;
person.caracteristicas = {
    colorCabello: "negro",
    colorOjos: "azul",
    estartura: 1.75,
    nacionalidad: "española"
};

//Tercera forma
let namee ="Sebas";
let lastName = "Vettel";
let Age = 22;
let caracteristics = {
    colorCabello: "negro",
    colorOjos: "azul",
    estartura: 1.75,
    nacionalidad: "española"
}

const personTwo={namee,lastName,Age,caracteristics}

console.log(personas);
console.log(person);
console.log(personTwo);

//cuarta forma
const personObject = new Object()
person.nombre = "sebastian";
personObject.apellido = "vettel";
personObject.edad = 22;
personObject.caracteristicas = {
    colorCabello: "negro",
    colorOjos: "azul",
    estartura: 1.75,
    nacionalidad: "española"
};

console.log(personObject)

const arregloDeObjetos = [personas,person,personObject];

arregloDeObjetos.forEach((Objeto)=>{
    Objeto.nombre = "Itadori";
})

console.log(arregloDeObjetos);
    
const perro ={
    nombre: "tintin",
    edad: 3,

    obtenerNombre(){
        return this.nombre;
    },

    cambiarNombre(nuevoNombre){
        return this.nombre= nuevoNombre;
    }

}
console.log(perro.obtenerNombre());
console.log(perro.cambiarNombre("toñito"));

//destructuring: obitine las caracteristicas que usted quiera

const {nombre,apellido,edad,caracteristicas} = personas;
console.log(nombre);
console.log(caracteristicas);

const verObjeto =(objeto) =>{
    const {nombre,apellido}=objeto;
    console.log(nombre);
    console.log(apellido);
}
verObjeto(personas);

