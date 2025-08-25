const session = db.getMongo().startSession();
const dbSession = session.getDatabase("TiendaBorojo");
session.startTransaction();

try {
    dbSession.productos.updateOne(
        { _id: 2, stock: { $gte: 1 } },
        { $inc: { stock: -1 } }
    );

    dbSession.ventas.insertOne({
        clienteId: 11,
        productos: [{ productoId: 2, cantidad: 1 }],
        fecha: new Date(),
        total: 7000
    });

    session.commitTransaction();
    print("Venta realizada exitosamente");
} catch (error) {
    session.abortTransaction();
    print("Error en la transacción de venta: " + error);
} finally {
    session.endSession();
}


try {
    dbSession.inventario.insertOne({
        productoId: 3,
        cantidad: 10,
        fecha: new Date(),
        proveedor: "Dulces Pacífico"
    });

    dbSession.productos.updateOne(
        { _id: 3 },
        { $inc: { stock: 10 } }
    );

    session.commitTransaction();
    print(" Inventario actualizado correctamente");
} catch (error) {
    session.abortTransaction();
    print("Error en la transacción de inventario: " + error);
} finally {
    session.endSession();
}


try {

    const venta = dbSession.ventas.findOne({ _id: 5 });

    if (venta) {

        venta.productos.forEach(item => {
            dbSession.productos.updateOne(
                { _id: item.productoId },
                { $inc: { stock: item.cantidad } }
            );
        });

        dbSession.ventas.deleteOne({ _id: 5 });

        session.commitTransaction();
        print("Devolución realizada con éxito");
    } else {
        throw "Venta no encontrada";
    }
} catch (error) {
    session.abortTransaction();
    print(" Error en la transacción de devolución: " + error);
} finally {
    session.endSession();
}
