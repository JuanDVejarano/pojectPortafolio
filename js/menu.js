//#region Variables
const menuSecundario = document.getElementById('idLeftNav');
//#endregion Variables


//#region Funciones
// funcion que reargoaniza el html segun la opcion elegida en el menu
const menuChange = elemento => {
    let div = document.getElementById(`div${elemento}`);
    //verificacion para cuando lo de al mismo item que ya tiene en pantalla
    if(!div.classList.contains('box--first')){
        // se crea el subMenu segun el menu
        let submenu;
        switch (elemento){
            case 'Portafolio':
                submenu = [ 
                    {name: 'Por-item1', direccion: ''}, 
                    {name: 'Por-item2', direccion: ''}, 
                    {name: 'Por-item3', direccion: ''}
                ]
                break;
            case  'PreWork':
                submenu = [ 
                    {name: 'Editor de Texto', direccion: 'idEditorTexto'}, 
                    {name: 'Consola', direccion: 'idConsola'}, 
                    {name: 'Pre-item3', direccion: ''}, 
                    {name: 'Pre-item4', direccion: ''}
                ]
                break;
            case  'HTML':
                submenu = [ 
                    {name: 'HTML-item1', direccion: ''}, 
                    {name: 'HTML-item2', direccion: ''}, 
                    {name: 'HTML-item3', direccion: ''}
                ]
                break;
            case  'CSS':
                submenu = [ 
                    {name: 'CSS-item1', direccion: ''}, 
                    {name: 'CSS-item2', direccion: ''}, 
                    {name: 'CSS-item3', direccion: ''}, 
                    {name: 'CSS-item4', direccion: ''}
                ]
                break;
        }
        crearSubMenu(submenu);

        //ponemos el div segun el menu seleccionado
        div.classList.add('box--animation');
        setTimeout(() => {
            //buscar el hijo que estaba adelante para quitar al clase box--first
            let nodoFirst = document.getElementsByClassName('box--first');
            for (let i = 0; i < nodoFirst.length; i++) {
                nodoFirst[i].classList.remove('box--first');
            }
            div.classList.add('box--first');
            div.classList.remove('box--animation');
        }, 1000);
    }
}


// crea los nodos del submenu segun le menu
const crearSubMenu = submenu =>{
    //debugger
    let menu;
    // enccuentra cual es el elemento ul que contiene le menu
    for (let i = 0; i < menuSecundario.children.length; i++) {
        if(menuSecundario.children[i].classList.contains('leftMenu')){
            menu = menuSecundario.children[i];
        }
    }

    // elimina todos los hijos
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }

    //crea los nuevos nodos para el submenu
    for (let i = 0; i < submenu.length; i++) {
        let newItem = document.createElement("li");
        newItem.setAttribute("class", "leftMenu__item");
        newItem.setAttribute("id", `itemSubM${i}`);
        menu.appendChild(newItem);

        let itemLink = document.createElement("a");
        itemLink.setAttribute("href", `#${submenu[i].direccion}`);
        itemLink.setAttribute("class", `itemSubM${i}`);
        itemLink.innerHTML = submenu[i].name;
        document.getElementById(`itemSubM${i}`).appendChild(itemLink);
    }
}
//#endregion Funciones