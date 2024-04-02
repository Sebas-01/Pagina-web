export const crearTrajeta =(titulo,texto) =>{
    const seccion = document.createElement('section');
    seccion.classList.add("seccion");
    
    //const imagen = document.createElement('img') 
    
    const title = document.createElement('h2');
    title.innerHTML = titulo;
    seccion.appendChild(title);
    const p = document.createElement('p');
    p.innerHTML=texto;
    seccion.appendChild(p);
    
    return seccion;

}