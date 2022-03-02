
const URL_API = 'http://localhost:3000/api/v1/remitosCompras';
const URL_API2 = 'http://localhost:3000/api/v1/remitosCompras/BuscarporFecha';
function conectarApiGET(data){

fetch(URL_API2,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        
    })
    .then((response)=> response.json())
    .then((data)=>{
        const HTMLResponse = document.querySelector("#ltp");
        const tpl = data.map((compra) => 
         `<div class="product">
        <div>
            <p>Proveedor: ${compra.id}</p>
            
            <p>Fecha: ${compra.createdAt}</p>
        </div>
        <button id="btn" onclick='conectarApiGET("${URL_API}/${compra.id}")'>></button>
      
    </div>`
    );
        HTMLResponse.innerHTML = `<div> ${tpl} </div>`;
        
    })
    


}

function BuscarporFecha(){

    const fechaseleccionada = document.getElementById('fecha').value;

    
   const data = {
        fecha_min: fechaseleccionada,
        fecha_max: `${fechaseleccionada}T23:59:59`
    };
    console.log(data);
    conectarApiGET(data);
}

const bnt = document.getElementById("btn-fecha");
bnt.addEventListener('click',BuscarporFecha,true);
/*

const bnt_mdf = document.getElementById("btn-mdf");
bnt_mdf.addEventListener('click',botonModificar,true);*/