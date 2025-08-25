# 🛒 Tienda Borojó - MongoDB Project

## 1. 📌 Descripción del proyecto y del escenario
La **Tienda Borojó** es un negocio ficticio que comercializa productos derivados del borojó (frutas, bebidas, postres, cosméticos, etc.).  
El proyecto implementa una **base de datos en MongoDB** para gestionar la información de clientes, productos, proveedores y ventas.  

Se desarrollaron ejemplos prácticos que abarcan:
- Inserciones de datos
- Consultas básicas y avanzadas
- Actualizaciones y eliminaciones
- Agregaciones
- Funciones almacenadas
- Transacciones
- Indexaciones

El escenario simula las operaciones reales de la tienda: venta de productos, control de stock, devoluciones, compras de clientes, relación con proveedores y análisis de ventas.

---

## 2. ⚙️ Instrucciones para ejecutar los scripts

1. Iniciar MongoDB y abrir la terminal de **mongosh**.  
2. Cargar cada archivo con el comando:
   ```bash
   load("nombreArchivo.js")
   ```
3. Orden recomendado:
   ```bash
   load("main.js")          # Creación de la base y colecciones
   load("inserciones.js")   # Inserción de productos iniciales
   load("ventas.js")        # Inserción de ventas de ejemplo
   load("consultas.js")     # Consultas básicas y con arrays
   load("lectura.js")       # Lecturas simples
   load("actualizacion.js") # Actualizaciones en colecciones
   load("eliminacion.js")   # Eliminación de documentos
   load("aggregation.js")   # Ejercicios con agregaciones
   load("funciones.js")     # Funciones personalizadas
   load("transacciones.js") # Simulación de transacciones
   ```

---

## 3. 📂 Listado de los ejercicios desarrollados

### 🔹 Creación de base de datos
- **main.js** → Crea la base `tienda_borojo` y sus colecciones (`clientes`, `productos`, `proveedores`, `ventas`).

### 🔹 Inserciones
- **inserciones.js** → Inserta un nuevo producto.  
- **ventas.js** → Inserta documentos de ventas con múltiples productos.

### 🔹 Consultas
- **consultas.js** → Consultas con expresiones regulares, búsquedas por arrays y condiciones con `$expr`.  
- **lectura.js** → Lecturas simples filtrando por stock o compras.

### 🔹 Actualizaciones
- **actualizacion.js** → Ejemplo de `updateOne` y `updateMany` en productos.

### 🔹 Eliminaciones
- **eliminacion.js** → Ejemplo de `deleteOne` (cliente por email) y `deleteMany` (productos con bajo stock).

### 🔹 Agregaciones
- **aggregation.js** → 
  - Producto más vendido.  
  - Total de unidades vendidas por producto.  
  - Cantidad de compras realizadas por cliente.  
  - Ventas agrupadas por mes.  
  - Promedio de precios por categoría.  
  - Top 3 productos con mayor stock.

### 🔹 Funciones
- **funciones.js** → Funciones almacenadas en MongoDB:  
  - `calcularDescuento(precio, porcentaje)`  
  - `clienteActivo(idCliente)`  
  - `verificarStock(productoId, cantidadDeseada)`

### 🔹 Transacciones
- **transacciones.js** → Simulación de operaciones con atomicidad:  
  1. **Venta:** Descuento de stock + inserción en ventas.  
  2. **Entrada de inventario:** Inserción en colección `inventario` + actualización de stock.  
  3. **Devolución:** Aumento de stock + eliminación de venta.

### 🔹 Indexaciones (en README)
- Índice en `nombre` de productos.  
- Índice compuesto en `categoria` y `precio`.  
- Índice único en `email` de clientes.  
- Uso de `explain()` para verificar consulta optimizada.

---

## 4. 📖 Explicación breve

- **Inserciones:** cargan datos base de productos y ventas.  
- **Consultas:** permiten búsquedas por nombre, regex, arrays y condiciones.  
- **Actualizaciones:** simulan cambios en stock y etiquetas.  
- **Eliminaciones:** eliminan registros según criterios específicos.  
- **Agregaciones:** permiten análisis de ventas, promedios y top productos.  
- **Funciones:** añaden lógica reutilizable dentro de MongoDB.  
- **Transacciones:** garantizan operaciones atómicas (ventas, devoluciones, inventario).  
- **Indexaciones:** mejoran el rendimiento de búsquedas y validan datos únicos.

---

## 👨‍💻 Autor

Proyecto desarrollado por **Carlos Mario**  
📚 Proyecto académico con fines de práctica en **MongoDB**
