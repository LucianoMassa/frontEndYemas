class Producto{

    codigo;
    nombre;
    cantidad;
    precio;

}

class registro
{
    codigo;
    cuenta;
   constructor(codigo,cuenta){
       this.codigo = codigo;
       this.cuenta = cuenta;
   }

}

class formulario{
fecha;
codigo;
emisor;
receptor;
hora;
constructor(fecha,codigo,emisor,receptor,hora){
    this.fecha = fecha; 
    this.codigo = codigo;
    this.emisor= emisor;
    this.receptor  = receptor;
    this.hora  = hora;

}

}

class Factura extends formulario{

    Productos;
    total;
    registro;
    constructor(fecha,codigo,emisor,receptor,hora,Productos,total,registro){
    super(fecha,codigo,emisor,receptor,hora);
    this.Productos = Productos;
    this.total = total;
    this.registro = registro;
    }

    facturar(){}

}
class Materiaprima {
existenciainicial;
compras;
existenciafinal;

}

class Manodeobra{
    horas;
    precio;
}
class costofabricacion{
energia;
depreciacionmaquina;
mantenimientodeposito;
}

class Planillacostos{

}