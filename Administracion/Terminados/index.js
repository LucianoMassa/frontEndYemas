
const URL_API = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/categories';
const URL_API2 = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/galpones';
const URL_API3 = 'https://tranquil-thicket-16476.herokuapp.com/api/v1/productos';



function cargarMateria(url){
      
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            } 
        })
        .then((response)=> response.json())
        .then(data => {
            
            const HTMLResponse = document.querySelector("#listaMateria");
            const tpl = data.productos.map((producto) => 
              `<div class="cartaproducto">

                <label for="p${producto.id}">${producto.nombre}</label>
                 <input type="number" id="p${producto.id}" value="${producto.cnt}" class="input-cantidad input-mt" placeholder="0">
                 <button id="btn" class="boton-guardar" onclick='UpProducto("${URL_API3}/${producto.id}", "p${producto.id}")' >Up</button>

             </div>`
            );
            HTMLResponse.innerHTML = `<div> ${tpl} </div>`;
        });
       
}
function cargarProductos(url){

    fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        } 
    })
    .then((response)=> response.json())
    .then(data => {
        
        const HTMLResponse = document.querySelector("#listaProductos");
        const tpl = data.productos.map((producto) => 
          `<div class="cartaproducto">

            <label for="p${producto.id}">${producto.nombre}</label>
             <input type="number" id="p${producto.id}" value="${producto.cnt}" class="input-cantidad input-mt" placeholder="0">
             <button id="btn" class="boton-guardar" onclick='UpProducto("${URL_API3}/${producto.id}", "p${producto.id}")' >Up</button>

         </div>`
        );
        HTMLResponse.innerHTML = `<div> ${tpl} </div>`;
    });
}
function cargarGalpones(url){
    fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        } 
    })
    .then((response)=> response.json())
    .then(data => {
        
        const HTMLResponse = document.querySelector("#listaGalpones");
        const tpl = data.map((galpon) => 
          `<div class="cartaproducto">

            <label for="g${galpon.id}">${galpon.nombre} Nro: ${galpon.id}</label>
             <input type="number" id="g${galpon.id}" value="${galpon.enProduccion}" class="input-cantidad input-mt" placeholder="0">
             
             <button id="btn" class="boton-guardar" onclick='UpGalpon("${url}/${galpon.id}", "g${galpon.id}")' >Up</button>

         </div>`
        );
        HTMLResponse.innerHTML = `<div> ${tpl} </div>`;
    });
}
//-----------------------

cargarMateria(`${URL_API}/1`);
cargarProductos(`${URL_API}/2`); 
cargarGalpones(URL_API2);
