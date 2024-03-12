class chair{
 //constructor
 constructor(color,altura,anguloReclinacion,subeObaja,soporteCabeza){
    this.color=color;
    this.altura=altura;
    this.anguloReclinacion=anguloReclinacion;
    this.subeObaja=subeObaja;
    this.soporteCabeza = soporteCabeza
 };
 //metodo

 ajustarAltura(){

 };

 ajustarAngulo(){

 };

 cambiarColor(){

 };
  

};
//herencia
 class officinaChair extends chair{
    //propiedades privadas
    #precioDeCompra;
    #vendedorSilla;

  constructor(color,altura,anguloReclinacion,subeObaja,soporteCabeza){
    //inicializo el constructor de la clase que se hereda  
    super();
    this.tipoDeSilla = "oficina";
    this.color=color;
    this.altura= altura;
    this.anguloReclinacion=anguloReclinacion;
    this.subeObaja=subeObaja;
    this.soporteCabeza = soporteCabeza;
    this.sePuedeMover=true;
    //inicializar propiedadesprivadas
    this.#precioDeCompra=3450;
    this.ajustarAltura ="Thomas";

  };

  ajustarAltura(altura){

    if(altura>0){
        console.log(this.altura);
    }
  };

  ajustarAngulo(anguloReclinacion){

    console.log(`se ajusto el angulo a ${angulo} `);

  };

  #calcularPrecioVenta(){
    return this.#precioDeCompra + this.#precioDeCompra*.3

  };

  generarFactura(){
    console.log("el precio es: " + this.#calcularPrecioVenta(this.#precioDeCompra));
  }
};

//vamos a isntanciar
const nuevaSilla= new chair('verde',5,50,ture,false);
console.log(nuevaSilla);

const sillaOficina=new officinaChair("negro", 6,40,false,flase);

console.log(sillaOficina);

sillaOficina.ajustarAltura(10);
sillaOficina.ajustarAngulo(55);
sillaOficina.generarFactura();
