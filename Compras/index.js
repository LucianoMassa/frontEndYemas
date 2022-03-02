const URL_API = 'http://localhost:3000/api/v1/notasdpds/Finalizar';
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
    const proveedor = Number(document.getElementById('proveedor').value);
    const carton_cnt = Number(document.getElementById('carton-cantidad').value);
    const carton2_cnt = Number(document.getElementById('carton2-cantidad').value);
    const maiz_cnt = Number(document.getElementById('maiz-cantidad').value);
    const carton_prc = Number(document.getElementById('carton-precio').value);
    const carton2_prc = Number(document.getElementById('carton-precio').value);
    const maiz_prc = Number(document.getElementById('maiz-precio').value);
    
    if(!carton_cnt){ alert('Campos incompletos'); throw new Error('Campos incompletos'); }
    if(!carton2_cnt){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!maiz_cnt){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!carton_prc){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!carton2_prc){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!maiz_prc){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!proveedor){alert('Campos incompletos'); throw new Error('Campos incompletos');}
        
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

