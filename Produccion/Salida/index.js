const URL_API = 'http://localhost:3000/api/v1/remitosEnvios/Finalizar';

async function conectarApiPOST(data){
    
    fetch(URL_API,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    
  return true;
}
async function validar(){
    const camionero = Number(document.getElementById('camionero').value);
    const bolita = Number(document.getElementById('bolita').value);
    const cascado = Number(document.getElementById('cascado').value);
    const chico = Number(document.getElementById('chico').value);
    const extra = Number(document.getElementById('extra').value);
    const grande = Number(document.getElementById('grande').value);
    const mediano = Number(document.getElementById('mediano').value);
    const sucio = Number(document.getElementById('sucio').value);
    const superx = Number(document.getElementById('super').value);
    
    if(!camionero){ alert('Campo Incompleto'); throw new Error('Campos incompletos'); }
    if(camionero > 0){ 
        if (camionero > 4){alert('Nro Camionero Error'); throw new Error('Nro Camionero Error');}
         }else{alert('Nro Camionero Error'); throw new Error('Nro Camionero Error');}
    if(!bolita){alert('Campo Incompleto'); throw new Error('Campos bolita incompletos');}
    if(!cascado){alert('Campo Incompleto'); throw new Error('Campos cascado incompletos');}
    if(!chico){alert('Campo Incompleto'); throw new Error('Campos chico incompletos');}
    if(!extra){alert('Campo Incompleto'); throw new Error('Campos extra incompletos');}
    if(!grande){alert('Campo Incompleto'); throw new Error('Campos grande incompletos');}
    if(!mediano){alert('Campo Incompleto'); throw new Error('Campos mediano incompletos');}
    if(!sucio){alert('Campo Incompleto'); throw new Error('Campos sucio incompletos');}
    if(!superx){alert('Campo Incompleto'); throw new Error('Campos super incompletos');}

    const data ={
    envio:{

        galponId: camionero

    },
    items: [
        { cnt: bolita,  productoId: 4 },
        { cnt: cascado, productoId: 5 },
        { cnt: chico,   productoId: 6 },
        { cnt: extra,   productoId: 7 },
        { cnt: grande,  productoId: 8 },
        { cnt: mediano, productoId: 9 },
        { cnt: sucio,   productoId: 10},
        { cnt: superx,  productoId: 11}
    ]
     }
     
     
    const res =  conectarApiPOST(data);

    if(res){
        alert('Nota de pedido Exitosa');
        document.getElementById('camionero').value= '';
        document.getElementById('bolita').value = '';
        document.getElementById('cascado').value = '';
        document.getElementById('chico').value ='';
        document.getElementById('extra').value ='';
        document.getElementById('grande').value ='';
        document.getElementById('mediano').value ='';
        document.getElementById('sucio').value ='';
        document.getElementById('super').value ='';

    }else{
    alert('Problema de conexion, verifique que los datos ingresados sean los correctos');
    }
}



const bnt = document.getElementById("btn");
 bnt.addEventListener('click',validar,true);
