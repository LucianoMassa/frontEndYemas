
const URL_API = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/remitosProducido';
const URL_API2 = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/remitosProducido/BuscarporFecha';

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
        const tpl = data.map((producido) => 
         `<div class="product">
        <div>
            <p>Galpon: ${producido.galpon.nombre}</p>
            
            <p>Fecha: ${producido.createdAt}</p>
        </div>
        <button id="btn" onclick='conectarApiGET("${URL_API}/${producido.id}")'>></button>
      
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
