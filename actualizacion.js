db.productos.updateOne({nombre: "Borojó deshidratado"}, {$inc:{stock: 10}} )

db.productos.updateMany({categoria: "Bebida"}, {tags:{$push: "bajo azúcar"}} )