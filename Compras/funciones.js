
    


function ClickAdd() {

    const nombre = document.getElementById("producto").value;
    
    const cantidad = document.getElementById("cantidad").value;

    const precio = document.getElementById("precio").value;
    alert("2");
    
    prx = new producto("codigo",nombre,"codbarra",cantidad,precio);
    alert("2");
    
    if(prx!=null){
       

        if(verificabackend(nombre,precio)==true){


            if(NdP.agregarproducto(prx)==true){
                mostrarenlista();
            }
            


        }

    }else{
        alert("fallo en la carga de productos");
    }

    
}

function mostrarenlista() {
    
    for(i =0; i< NdP.getlistaproductos().retlista().length();i++){

        document.getElementById("np"+(i+1)).innerText=NdP.getlistaproductos().retlista()[i].nombre;

    }

}



// verificar clickAdd in the backend

function verificabackend(nombre,precio) {
    return true;
}

import {producto,Cuenta} from "../estructura.js";