export class Cuenta{
   
constructor (codigo,nombre){

    this.nombre=nombre;
    this.codigo = codigo;
    this.debe = 0;
    this.haber = 0; 
}
 saldo(){ 
     return (this.debe-this.haber);
    }
 retname(){ 
     return this.nombre;
    }
 retcodigo(){
     return this.codigo;
    }
 retdebe(){
     return this.debe;
    }
 rethaber(){
     return this.haber;
    }
 retcuenta(){
     return this.codigo+"|"+this.nombre;
    }

    adddebe(valor){
        this.debe = this.debe + valor;
    }
    addhaber(valor){
        this.haber = this.haber + valor;
    }

    setdebe(valor){ this.debe = this.debe -valor;}
    sethaber(valor){this.haber = this.haber - valor;}

}

export class producto extends Cuenta{

    constructor(codigo, codbarra, nombre,cantidad, precio){
        alert("entro");
        super(codigo,nombre);
        this.codbarra = codbarra;
        this.cantidad = cantidad;
        this.precio = precio;

         if((cantidad <= 0 )||( precio <= 0)){ return null;}
    }

retcodbarra(){return this.codbarra;}
retprecio(){ return this.precio;}
retcnt(){ return this.cantidad;}
nuevoprecio(valor){  this.precio = valor;}
retimporte(){ return this.cantidad * this.importe;}
addcantidad(valor){ this.cantidad += valor;}
rescantidad(valor){this.cantidad = this.cantidad - valor;}

}

export default class listproduct extends producto(){

    constructor(){
        this.list = [];
    }

    addproduct(p){

        if(this.existe()==false){

            this.list.pop(p);
            return true;

        }else{ return false; }
    }

    setproduct(p){
    // falta sacar producto de la lista
    }
    buscarproduct(codp){

        this.list.forEach(px =>  {
        
            if(px.retcodigo()==codp){ return px;}
    
    
         });
    
         return null;


    }
    existe(p){

     this.list.forEach(px =>  {
        
        if(px===p){ return true;}


     });

     return false;

    }

    retlista(){ return this.list;}


    
}

export default class formulario{

    constructor(codigo, fechaemision,emisor, receptor){
        this.codigo = codigo;
        this.fechaemision = fechaemision;
        this.fecharecepcion = null;
        this.emisor = emisor;
        this.receptor = receptor;

    }

    getcodigo(){
        return this.codigo;
    }

    getfechaemision(){
        return this.fechaemision;
    }

    getfecharecepcion(){
        return this.fecharecepcion;
    }

    setfechaderecepcion(valor){
        if(this.fecharecepcion <= valor){
            this.fecharecepcion = valor;
            return true;
        }else{ return false;}

    }
    getreceptor(){
        return this.receptor;
    }

    setreceptor(valor){
        this.receptor = valor;
    }

    getemisor(){
        return this.emisor;
    }
}

export default class NotaDePedido extends formulario{

constructor(codigo,fechaemision,emisor,receptor){
    super(codigo,fechaemision,fecharecepcion,emisor,receptor,proveedor);
    this.listaproducto = new listproduct();
    this.verificacion = false;
    this.pagos = [];

    this.proveedor = this.proveedor;
}

importetotal(){

    sum =0;

    this.listaproducto.retlista().forEach(p =>{

        sum = sum + p.retimporte();
    });

    return sum;
}

agregarproducto(p){

    if(this.listaproducto.addproduct(p)==true){
        // se cargo correctamente
    }else{
        //el producto no se pudo cargar
    }
}

cantidadproductos(){
    return this.listaproducto.retlista().length();
}

setverificacion(){ 
    this.verificacion = true;
}
getverificacion(){ 
    return this.verificacion;
}

getpagos(){
    return this.pagos;
}
setpagos(valor){
    
    this.pagos.pop(valor);
}


getlistaproductos(){
    return this.listaproducto;
}

}

export default class pago extends Cuenta{

    constructor(codigo,nombre,importe){
    super(codigo,nombre);
    this.importe = importe;
    }
    getimporte(){
        return this.importe;
    }

    setimporte(valor){
        if(valor >= 0){
            this.importe = valor;
            return true;
        }else{ return false;}
    }

}

class Persona extends Cuenta{
   correo;
   telefono;
   direccion;
   redessocieales;
   cuil;
   razonsocial;
       constructor  (codigo,nombre,correo,telefono,direccion,redessocieales,cuil,razonsocial){
        super(codigo,nombre);
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.redessocieales = redessocieales;
        this.cuil = cuil;
        this.razonsocial = razonsocial;
       }
       retcorreo(){
           return this.correo;
       }
       rettelefono(){
           return this.telefono;
       }
       retdireccion(){
           return this.direccion;
       }
       retredessociales(){
           return this.redessocieales;
       }
       retcuil(){
           return this.cuil;
       }
       retrazonsocial(){
           return this.razonsocial;
       }
       retpersona(){
           return super.retcuenta() + "|"+this.correo+"|"+this.telefono+
           "|"+this.direccion+"|"+ this.redessocieales+"|"+this.cuil+"|"+this.razonsocial;
       }

       modcorreo(valor){ 
           this.correo = valor;}
       modtelefon(valor){
            this.telefono = valor;}
       moddireccion(valor){
           this.direccion = this.direccion;}
       modredessociales(valor){
           this.redessocieales = valor;}
       modcuil(valor){t
        his.cuil = valor;}
       modrazonsocial(valor){
           this.razonsocial = valor;}
}
class Usuario extends Persona{

    usuario;
    contrase;

    constructor(codigo,nombre,correo,telefono,direccion,redessocieales,cuil,razonsocial,usuario,contrase){
    super(codigo,nombre,correo,telefono,direccion,redessocieales,cuil,razonsocial);
    this.usuario = usuario;
    this.contrase = contrase;

    }

    retusuario(){
        return this.usuario;
    }
    retcntra(){
        return this.contrase;
    }
    retUSU(){
        return this.usuario+"|"+this.contrase;
    }
    retUSUcompleto(){
        return super.retpersona()+"|"+ this.retUSU;
    }

    modusuario(valor){
        this.usuario = valor;}

     modcontrase(valor){
         this.contrase = valor;
     }   
}

export class pepito{
    constructor(){}
}


