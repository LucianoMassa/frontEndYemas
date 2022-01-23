function ClickAdd() {

    const nombre = document.getElementById("producto").value;
    
    const cantidad = document.getElementById("cantidad").value;

    const precio = document.getElementById("precio").value;

    if(verificafrontend(nombre,cantidad,precio)== true){

        if(verificabackend(nombre,cantidad,precio)==true){


        }
    }

    
}

function verificafrontend(nombre,cantidad, precio) {
    i = 1;
    band = false;
    while((i<16)&&(band==false)){

        if(document.getElementById(np+i).innerText==""){
             document.getElementById("np"+i).innerText=nombre+" - "; 
             document.getElementById("cnt"+i).innerText=cantidad; 
             document.getElementById("x"+i).innerText="X"; 
             document.getElementById("pu"+i).innerText="$"+precio +" - "; 
             document.getElementById("im"+i).innerText="$"+(precio*cantidad); 
             
             band = true;
            }
        i++; 
    }
    if(band==true){
   document.getElementById("producto").value = 
   document.getElementById("cantidad").value=
    document.getElementById("precio").value="";
    return true;
    }else{ return false;}
}



// existencia de nombre en lista y retorna posicion

function inlista(nombre,cantidad,precio) {
    
}




// verificar clickAdd in the backend

function verificabackend(nombre,cantidad,precio) {
    return true;
}