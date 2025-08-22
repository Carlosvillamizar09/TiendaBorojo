db.productos.aggregate([
  {
    $group: {
      _id: null,
      productosMasVendios: { $sum: "" }
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
    $sort: { totalUnidadesVendidas: -1 }
  }
])

db.clientes.aggregate([
  {
    $unwind: "$compras"
  },
  {
    $group: {
      _id: "$compras",
      cantidadComprasRealizadas: { $sum: "$compras" }
    }
  },
  {
    $sort: { cantidadComprasRealizadas: -1 }
  }
])

db.ventas.aggregate([
  {
    $group: {
      _id: { mes: { $month: "$fecha" } },
      totalVentas: { $sum: "$total" },
      cantidadVentas: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.mes": 1 }
  }
])

db.productos.aggregate([
  {
    $group: {
      _id: "$categoria",
      promedioPrecioPorCategoria: { $avg: "$precio" }
    }
  }
  ,
  {
    $sort: { promedioPrecioPorCategoria: -1 }
  }
])

db.productos.aggregate([
  {
    $sort: { stock: -1 } 
  },
  {
    $limit: 3       
  }
])

