const URL_API = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/notasdpds/Finalizar';
const xhr = new XMLHttpRequest();



 function onRequestHandler(){
        if(this.status === 200 && this.readyState === 4){
            /*
             
             */
            const data = JSON.parse(this.response);
            console.log(data);
            /*
            const HTMLResponse = document.querySelector("#app");
            const tpl = data.map(producto => `<li>${producto.nombre}</li>`);
            HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
             */
            }
}
function ClickConfirm() {
    xhr.addEventListener('load', onRequestHandler);
    xhr.open('GET',`${URL_API}`);
    xhr.send();

}

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
    let proveedor = Number(document.getElementById('proveedor').value);
    let carton_cnt = Number(document.getElementById('carton-cantidad').value);
    let carton2_cnt = Number(document.getElementById('carton2-cantidad').value);
    let maiz_cnt = Number(document.getElementById('maiz-cantidad').value);
    let carton_prc = Number(document.getElementById('carton-precio').value);
    let carton2_prc = Number(document.getElementById('carton2-precio').value);
    let maiz_prc = Number(document.getElementById('maiz-precio').value);
    
    if(!carton_cnt){if(document.getElementById('carton-cantidad').value==0){ carton_cnt =0;}else{
         alert('Campos incompletos'); throw new Error('Campos incompletos'); }
        }
    if(!carton2_cnt){ if(document.getElementById('carton2-cantidad').value==0){ carton2_cnt =0;}else{
        alert('Campos incompletos'); throw new Error('Campos incompletos');}
    }
    if(!maiz_cnt){if(document.getElementById('maiz-cantidad').value==0){ maiz_cnt=0;}else{
        alert('Campos incompletos'); throw new Error('Campos incompletos');}}
    if(!carton_prc){if(document.getElementById('carton-precio').value==0){ carton_prc=0;}else{
        alert('Campos incompletos'); throw new Error('Campos incompletos');}}
    if(!carton2_prc){if(document.getElementById('carton2-precio').value==0){ carton2_prc =0;}else{
        alert('Campos incompletos'); throw new Error('Campos incompletos');}}
    if(!maiz_prc){if(document.getElementById('maiz-precio').value==0){ maiz_prc =0;}else{
        alert('Campos incompletos'); throw new Error('Campos incompletos');}}
    if(!proveedor){
        alert('Campos incompletos'); throw new Error('Campos incompletos');}
        
    const data ={
    nota:{
        customerId: proveedor
    },
    items:[
        {
            cnt: carton_cnt,
            precio: carton_prc,
            productoId: 1
        },
        {
            cnt: carton2_cnt,
            precio: carton2_prc,
            productoId: 2
        },
        {
            cnt: maiz_cnt,
            precio: maiz_prc,
            productoId: 3
        }

    ]
     }
     

     console.log(data);
    const res = await conectarApiPOST(data);

    if(res){
        alert('Nota de pedido Exitosa');
        document.getElementById('proveedor').value= '';
        document.getElementById('carton-cantidad').value = '';
        document.getElementById('carton2-cantidad').value = '';
        document.getElementById('maiz-cantidad').value ='';
        document.getElementById('carton-precio').value ='';
        document.getElementById('carton2-precio').value ='';
        document.getElementById('maiz-precio').value ='';
    }else{
    alert('Problema de conexion, verifique que los datos ingresados sean los correctos');
    }
}

function conectarApiGET(){


fetch(URL_API,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        } 
    })
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        debugger
    })


}

const bnt = document.getElementById("btn");
 bnt.addEventListener('click',validar,true);

