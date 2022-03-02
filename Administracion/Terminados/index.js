
const URL_API = 'http://localhost:3000/api/v1/productos';
const URL_API2 = 'http://localhost:3000/api/v1/galpones';



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
//-----------------------

function conectarApiGET(componente, url){

    fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        } 
    })
    .then((response)=> response.json())
    .then((data)=> componente.value = data.cnt)


}
function conectarApiGET2(componente, url){

    fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        } 
    })
    .then((response)=> response.json())
    .then((data)=> componente.value = data.enProduccion)


}
function cargarProductos(){
   
    conectarApiGET(document.getElementById('carton-cantidad'), `${URL_API}/1`);
    conectarApiGET(document.getElementById('carton2-cantidad'), `${URL_API}/2`);
    conectarApiGET(document.getElementById('maiz-cantidad'), `${URL_API}/3`);
    conectarApiGET(document.getElementById('bolita'), `${URL_API}/4`);
    conectarApiGET(document.getElementById('cascado'), `${URL_API}/5`);
    conectarApiGET(document.getElementById('chico'), `${URL_API}/6`);
    conectarApiGET(document.getElementById('extra'), `${URL_API}/7`);
    conectarApiGET(document.getElementById('grande'), `${URL_API}/8`);
    conectarApiGET(document.getElementById('mediano'), `${URL_API}/9`);
    conectarApiGET(document.getElementById('sucio'), `${URL_API}/10`);
    conectarApiGET(document.getElementById('super'), `${URL_API}/11`);

}
function cargarGalpones(){
    conectarApiGET2(document.getElementById('galpon1'), `${URL_API2}/1`);
    conectarApiGET2(document.getElementById('galpon2'), `${URL_API2}/2`);
    conectarApiGET2(document.getElementById('galpon3'), `${URL_API2}/3`);
    conectarApiGET2(document.getElementById('galpon4'), `${URL_API2}/4`);
}
//-----------------------

function modifcarPrima(){

    const carton_cnt = Number(document.getElementById('carton-cantidad').value);
    const carton2_cnt = Number(document.getElementById('carton2-cantidad').value);
    const maiz_cnt = Number(document.getElementById('maiz-cantidad').value);
    if(!carton_cnt){ alert('Campos incompletos'); throw new Error('Campos incompletos'); }
    if(!carton2_cnt){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!maiz_cnt){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    
    fetch(`${URL_API}/1`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cnt: carton_cnt})
    }).then((response)=> response.json());

    fetch(`${URL_API}/2`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cnt: carton2_cnt})
    }).then((response)=> response.json());

    fetch(`${URL_API}/3`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cnt: maiz_cnt})
    }).then((response)=> response.json());

}
const bnt = document.getElementById("btn1");
bnt.addEventListener('click',modifcarPrima,true);

function modifcarProductos(){
    const carton_cnt = Number(document.getElementById('bolita').value);
    const carton2_cnt = Number(document.getElementById('cascado').value);
    const maiz_cnt = Number(document.getElementById('chico').value);
    const maiz_cnt = Number(document.getElementById('extra').value);
    const maiz_cnt = Number(document.getElementById('grande').value);
    const maiz_cnt = Number(document.getElementById('mediano').value);
    const maiz_cnt = Number(document.getElementById('sucio').value);
    const maiz_cnt = Number(document.getElementById('super').value);

    if(!carton_cnt){ alert('Campos incompletos'); throw new Error('Campos incompletos'); }
    if(!carton2_cnt){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    if(!maiz_cnt){alert('Campos incompletos'); throw new Error('Campos incompletos');}
    
    fetch(`${URL_API}/1`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cnt: carton_cnt})
    }).then((response)=> response.json());

    fetch(`${URL_API}/2`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cnt: carton2_cnt})
    }).then((response)=> response.json());

    fetch(`${URL_API}/3`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cnt: maiz_cnt})
    }).then((response)=> response.json());
}
const bnt2 = document.getElementById("btn2");
bnt.addEventListener('click',modifcarProductos,true);

function modifcarGalpones(){}
const bnt3 = document.getElementById("btn3");
bnt.addEventListener('click',modifcarGalpones,true);



//-------------------------

cargarProductos(); cargarGalpones();
