calcularDescuento(precio, porcentaje)

db.system.js.insertOne({
    _id: "calcularDescuento",
    value: new Code("function(precio, porcentaje) { return precio - (precio * porcentaje / 100); }")
});

const f1 = db.system.js.findOne({ _id: "calcularDescuento" });
const calcularDescuento = new Function('return ' + f1.value.code)();

const p1 = db.productos.findOne({ nombre: "Galletas con borojó" });
calcularDescuento(p1.precio, 10);


db.system.js.insertOne({
    _id: "clienteActivo",
    value: new Code(`
      function(idCliente) {
        const cliente = db.clientes.findOne({ _id: idCliente });
        if (!cliente || !cliente.compras) return false;
        return cliente.compras.length > 3;
      }
    `)
});

const f3 = db.system.js.findOne({ _id: "clienteActivo" });
const clienteActivo = new Function('return (' + f3.value.code + ')')();

clienteActivo(6)

verificarStock(productoId, cantidadDeseada)

db.system.js.insertOne({
    _id: "verificarStock",
    value: new Code("function(productoId, cantidadDeseada) {const producto = db.productos.findOne({ _id: productoId });if (!producto) {return false;}return producto.stock >= cantidadDeseada}")});
 
  const f7 = db.system.js.findOne({ _id: "verificarStock" });
  const verificarEstock = new Function('return (' + f7.value.code + ')')();
  
  verificarEstock(2, 10); 
  verificarEstock(6, 15); 
  