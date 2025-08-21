db.productos.find({stock:{ $gt: 20}})

db.clientes.find({compras:{$lt: 1}})