
const URL_API = 'http://localhost:3000/api/v1/remitosProduccion';
const URL_API2 = 'http://localhost:3000/api/v1/remitosProduccion/BuscarporFecha';

function conectarApiGET(url){

fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        
    })
    .then((response)=> response.json())
    .then((data)=>{
        const HTMLResponse = document.querySelector("#ltp");
        const tpl = data.map((produccion) => 
         `<div class="product">
        <div>
            <p>Galpon: ${produccion.galpon.nombre}</p>
            
            <p>Fecha: ${produccion.createdAt}</p>
        </div>
        <button id="btn" onclick='conectarApiGET("${URL_API}/${produccion.id}")'>></button>
      
    </div>`
    );
        HTMLResponse.innerHTML = `<div> ${tpl} </div>`;
        
    })
    


}
function BuscarporFecha(){

    const fechaseleccionada = document.getElementById('fecha').value;

    conectarApiGET(`${URL_API2}?fechamin=${fechaseleccionada}&fechamax=${fechaseleccionada}T23%3A59%3A59`);
}
const bnt = document.getElementById("btn-fecha");
bnt.addEventListener('click',BuscarporFecha,true);
