
const URL_API = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/remitosCompras/Finalizar';
const URL_API2 = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/notasdpds/Estado';
const URL_API3 = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/notasdpds';


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


conectarApiGET();
