class Cuenta{
   
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

class producto extends Cuenta{

    constructor(codigo, nombre, codbarra,cantidad, precio){

        super(codigo,nombre);
        this.codbarra = codbarra;
        this.cantidad = cantidad;
        this.precio = precio;

    }

retcodbarra(){return this.codbarra;}
retprecio(){ return this.precio;}
retcnt(){ return this.cantidad;}
nuevoprecio(valor){  this.precio = valor;}
retimporte(){ return this.cantidad * this.importe;}
addcantidad(valor){ this.cantidad += valor;}
rescantidad(valor){this.cantidad = this.cantidad - valor;}

}

class listproduct extends producto(){

    constructor(){
        this.list = [];
    }

    addproduct(p){}
    setproduct(p){}
    buscarproduct(codp){}
    
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


