const URL_API = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/remitosProduccion/Finalizar';


async function conectarApiPOST(data){
    let band;
    fetch(URL_API,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json());
    
  return true;
}

async function validar(){
    let galpon = Number(document.getElementById('galpon').value);
    let carton_cnt = Number(document.getElementById('carton-cantidad').value);
    let carton2_cnt = Number(document.getElementById('carton2-cantidad').value);
    let maiz_cnt = Number(document.getElementById('maiz-cantidad').value);
     
    if(!carton_cnt){ if(document.getElementById('carton-cantidad').value== 0){ carton_cnt=0;}else{
        alert('Campo incompleto'); throw new Error('Campos incompletos'); }}
    if(!carton2_cnt){if(document.getElementById('carton2-cantidad').value== 0){ carton2_cnt=0;}else{
        alert('Campo incompleto'); throw new Error('Campos incompletos');}}
    if(!maiz_cnt){if(document.getElementById('maiz-cantidad').value== 0){ maiz_cnt=0;}else{
        alert('Campo incompleto'); throw new Error('Campos incompletos');}}
    if(!galpon){alert('Campo incompleto'); throw new Error('Campos incompletos');}
    if(galpon > 0){ 
        if (galpon > 4){alert('Nro de galpon incorrecto'); throw new Error('Nro de galpo incorrecto');}
     }else{alert('Nro de galpon incorrecto'); throw new Error('Nro de galpo incorrecto');}
        
    const data ={
    produccion:{
        galponId: galpon
    },
    items:[
        {
            cnt: carton_cnt,
            productoId: 1
        },
        {
            cnt: carton2_cnt,
            productoId: 2
        },
        {
            cnt: maiz_cnt,
            productoId: 3
        }

    ]
     }

     console.log(data);
     
    const res = await conectarApiPOST(data);

    if(res){
        alert('Carga Exitosa');
        document.getElementById('galpon').value= '';
        document.getElementById('carton-cantidad').value = '';
        document.getElementById('carton2-cantidad').value = '';
        document.getElementById('maiz-cantidad').value ='';
 
    }else{
    alert('Problema de conexion, verifique que los datos ingresados sean los correctos');
    }
}



const bnt = document.getElementById("btn");
 bnt.addEventListener('click',validar,true);