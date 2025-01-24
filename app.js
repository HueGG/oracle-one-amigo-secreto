// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendsNames = []; //Arrary con nombres
const maxLenghtName = 30;
const idInputName = 'amigo';
const idListName = 'listaAmigos';
//Función para ingresar nombres al array
function agregarAmigo(){
    
    //Almacenar nombre
    let name = document.getElementById("amigo").value; 
    //Validar nombre
    if(validateName(name, maxLenghtName)){
        //Si es correcto
        //Agregar nombre a la lista
        friendsNames.push(name);
    }else{
        alert("Por favor, inserte un nombre. \n > No nombres vacios. \n > No más de 30 caracteres");
    }
    
    cleanInput(idInputName);
    printNames(idListName, friendsNames.length);
    
    return;
}

//Validar input
function validateName(name, maxLenghtName){
    if(name !== "" && (name.length < parseInt(maxLenghtName)) ){
        console.log(`El tamaño de ${name} es ${name.length}`);
        return true;
    }else{
        return false;
    }
    
}

///Limpiar input
function cleanInput(inputName){
    document.getElementById(inputName).value ='';
    return;
}

//Imprimir nombres de array en la lista especificada
function printNames(listId, maxLenght){
    //Objeto de la lsta que sera el contenedor de <li>
    let elementoLista = document.getElementById(listId);
    //Limpieza de la lista
    elementoLista.innerHTML = '';
    //CÓDIGO PRUEBA impresion de arreglo
    for (let index = 0; index < maxLenght; index++) {
        //Crear un elemento <li>
        let listaNom = document.createElement('li');
        //Asignar texto a <li>
        listaNom.textContent = `${index+1} ${friendsNames[index]}`;
        //Agregar el <li> al contenedor
        elementoLista.appendChild(listaNom);
    }

    return;
}

function sortearAmigo(){
    let numeroAleatorio = 0;
    //validar que lista no este vacia
    if(friendsNames.length > 0){
        //Generar num aleatorio
        numeroAleatorio = Math.floor(Math.random()*friendsNames.length);
        //Impresion de amigo seceto
        //console.log(numeroAleatorio);
        //console.log(`El nombre sorteado es: ${friendsNames[numeroAleatorio]}`);
        document.getElementById(idListName).innerHTML = `El amigo secreto es: ${friendsNames[numeroAleatorio]}`;
    }else{
        alert("Ingrese al menos el nombre de un amigo");
    }

    return;
}

