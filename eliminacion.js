db.clientes.deleteOne({email:"juan@email.com"})

db.productos.deleteMany({stock:{$lt:5}})