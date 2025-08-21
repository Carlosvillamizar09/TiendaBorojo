db.productos.aggregate([
    {
        $group: {
            _id: null,
            productosMasVendios:{$sum: ""}  
        }
    }
])

db.ventas.aggregate([
    { 
      $unwind: "$productos" 
    },
    {
      $group: {
        _id: "$productos.productoId",
        totalUnidadesVendidas: { $sum: "$productos.cantidad" }
      }
    },
    {
      $sort: { totalUnidadesVendidas: -1 } // Ordena de mayor a menor
    }
  ])
  