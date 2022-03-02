
const URL_API = 'http://localhost:3000/api/v1/remitosCompras/Finalizar';
const URL_API2 = 'http://localhost:3000/api/v1/notasdpds/Estado';
const URL_API3 = 'http://localhost:3000/api/v1/notasdpds';

var modi= false;
var cnt  =0;
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
    const numero = Number(document.getElementById('numero').value);
    const notaid = Number(document.getElementById('notaid').value);
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
    if(!numero){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!notaid){alert('Campos incompletos'); throw new Error('Campos incompletos');}

    
        
    const data ={
    compra:{
        customerId: proveedor,
        numero : numero,
        notaid: notaid,
        modificacion: !modi
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
        alert('Carga de compra exitosa');
        document.getElementById('proveedor').value= '';
        document.getElementById('proveedorname').value= '';
        document.getElementById('notaid').value= '';
        document.getElementById('numero').value= '';
        document.getElementById('carton-cantidad').value = '';
        document.getElementById('carton2-cantidad').value = '';
        document.getElementById('maiz-cantidad').value ='';
        document.getElementById('carton-precio').value ='';
        document.getElementById('carton2-precio').value ='';
        document.getElementById('maiz-precio').value ='';
        if(modi===false){ visibilidad();}
    }else{
    alert('Problema de conexion, verifique que los datos ingresados sean los correctos');
    }
}

function conectarApiGET(){

fetch(URL_API2,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        } 
    })
    .then((response)=> response.json())
    .then((data)=>{
        const HTMLResponse = document.querySelector("#ltp");
        const tpl = data.map((nota) => 
         `<div class="product">
        <div>
            <p>Proveedor: ${nota.customer.name}</p>
            
            <p>Fecha: ${nota.createdAt}</p>
        </div>
        <button id="btn" onclick='conectarApiGET("${URL_API3}/${nota.id}")'>></button>
      
    </div>`
    );
        HTMLResponse.innerHTML = `<div> ${tpl} </div>`;
        
    })
    


}

function botonModificar(){
    
if(cnt < 1){
    visibilidad();
    cnt++;
    }else{

        document.getElementById('proveedor').value= '';
        document.getElementById('proveedorname').value= '';
        document.getElementById('notaid').value= '';
        document.getElementById('numero').value= '';
        document.getElementById('carton-cantidad').value = '';
        document.getElementById('carton2-cantidad').value = '';
        document.getElementById('maiz-cantidad').value ='';
        document.getElementById('carton-precio').value ='';
        document.getElementById('carton2-precio').value ='';
        document.getElementById('maiz-precio').value ='';
        cnt = 0;
        visibilidad();
        alert('No se puede sobre modificar');
    }
}
function visibilidad(){
    
    modi = !modi;
    document.getElementById("carton-cantidad").disabled = modi;
    document.getElementById("carton2-cantidad").disabled = modi;
    document.getElementById("maiz-cantidad").disabled = modi;
    document.getElementById("carton-precio").disabled = modi;
    document.getElementById("carton2-precio").disabled = modi;
    document.getElementById("maiz-precio").disabled = modi;
}

visibilidad();
document.getElementById("notaid").disabled = modi;
document.getElementById("proveedor").disabled = modi;
document.getElementById("proveedorname").disabled = modi;
    console.log('Peticion devuelve '+conectarApiGET());
    const bnt = document.getElementById("btn");
    bnt.addEventListener('click',validar,true);
    const bnt_mdf = document.getElementById("btn-mdf");
    bnt_mdf.addEventListener('click',botonModificar,true);