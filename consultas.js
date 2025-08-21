db.productos.find({nombre: {
    $regex: "^Boro"
}})

db.productos.find({nombre: {
    $regex: "Con", $options:"i"
}})

db.clientes.find({nombre: {
    $regex: "z", $options:"i"
}})


//Consultas con operadores en array

db.clientes.find({
    preferencias: "natural"
})

db.productos.find({
    tags: {$all:["natural", "orgánico"]}
})

db.productos.find({
    $expr: {
      $gt: [ { $size: "$tags" }, 1 ]
    }
  })
  
