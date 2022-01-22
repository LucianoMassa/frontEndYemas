function agregaralista(params) {
    
    
    
    const nombre = document.getElementById("producto").value;
    
    const cantidad = document.getElementById("cantidad").value;

    const precio = document.getElementById("precio").value;

    i = 1;
    band = false;
    np = "np";

    while((i<16)&&(band==false)){

        if(document.getElementById(np+i).innerText==""){
             document.getElementById(np+i).innerText=nombre+" - "; 
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
 }


}