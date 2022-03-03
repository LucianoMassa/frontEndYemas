
const URL_API = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/remitosCompras';
const URL_API2 = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/remitosCompras/BuscarporFecha';

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
        const tpl = data.map((compra) => 
         `<div class="product">
        <div>
            <p>Proveedor: ${compra.customer.name}</p>
            
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

    conectarApiGET(`${URL_API2}?fechamin=${fechaseleccionada}&fechamax=${fechaseleccionada}T23%3A59%3A59`);

}
const bnt = document.getElementById("btn-fecha");
bnt.addEventListener('click',BuscarporFecha,true);
