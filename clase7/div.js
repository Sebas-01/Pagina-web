export const crearDiv = (texto)=>{
    const menuPrincipal = document.createElement('div');
    // asi se asigna clase a la etiqueta
    menuPrincipal.classList.add("principal");
    //agregar mas elementos
    let p = document.createElement('p');
    p.innerHTML = texto;
    //enviar al html
    menuPrincipal.appendChild(p);

    return menuPrincipal;
};