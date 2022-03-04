const URL_API = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/remitosProducido/Finalizar';

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
    let galpon = Number(document.getElementById('galpon').value);
    let bolita = Number(document.getElementById('bolita').value);
    let cascado = Number(document.getElementById('cascado').value);
    let chico = Number(document.getElementById('chico').value);
    let extra = Number(document.getElementById('extra').value);
    let grande = Number(document.getElementById('grande').value);
    let mediano = Number(document.getElementById('mediano').value);
    let sucio = Number(document.getElementById('sucio').value);
    let superx = Number(document.getElementById('super').value);
    
    if(!galpon){alert('Nro de galpon incorrecto'); throw new Error('Campos incompletos'); }
    if(galpon > 0){ 
        if (galpon > 4){alert('Nro de galpon incorrecto'); throw new Error('Campos incompletos');}
         }else{alert('Nro de galpon incorrecto'); throw new Error('Campos incompletos');}
    if(!bolita){if(document.getElementById('bolita').value==0){bolita=0;}else{
        alert('Campo/s mal cargado');throw new Error('Campos bolita incompletos');}}
    if(!cascado){if(document.getElementById('cascado').value==0){cascado=0;}else{
        alert('Campo/s mal cargado'); throw new Error('Campos cascado incompletos');}}
    if(!chico){if(document.getElementById('chico').value==0){chico=0;}else{
        alert('Campo/s mal cargado'); throw new Error('Campos chico incompletos');}}
    if(!extra){if(document.getElementById('extra').value==0){extra=0;}else{
        alert('Campo/s mal cargado'); throw new Error('Campos extra incompletos');}}
    if(!grande){if(document.getElementById('grande').value==0){grande=0;}else{
        alert('Campo/s mal cargado'); throw new Error('Campos grande incompletos');}}
    if(!mediano){if(document.getElementById('mediano').value==0){mediano=0;}else{
        alert('Campo/s mal cargado'); throw new Error('Campos mediano incompletos');}}
    if(!sucio){if(document.getElementById('sucio').value==0){sucio=0;}else{
        alert('Campo/s mal cargado'); throw new Error('Campos sucio incompletos');}}
    if(!superx){if(document.getElementById('super').value==0){superx=0;}else{
        alert('Campo/s mal cargado'); throw new Error('Campos super incompletos');}}

    const data ={
    producido:{

        galponId: galpon

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
        alert('Remito Producido Exitosamente');
        document.getElementById('galpon').value= '';
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
