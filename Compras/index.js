

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

    const proveedor =  document.getElementById("proveedor").value;

    const data = {
        nota:{
            customerId: proveedor
        },
        items:[
            {
                cnt: 1,
                precio: 1,
                productoId: 1
            },
            {
                cnt: 1,
                precio: 1,
                productoId: 2
            },
            {
                cnt: 1,
                precio: 1,
                productoId: 3
            }

        ]

    };

    xhr.addEventListener('load', onRequestHandler);
    xhr.open('POST',`${URL_API}`);
    xhr.send(JSON.parse(data));



}

