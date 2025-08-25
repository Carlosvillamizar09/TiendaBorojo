db.productos.createIndex({ nombre: 1 })

db.productos.createIndex({ categoria: 1, precio: -1 })

db.clientes.createIndex({ email: 1 }, { unique: true })

db.productos.find({ nombre: "Jugo de borojó" }).explain("executionStats")
