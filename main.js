
//cración de objeto PRODUCTO
const iva = 1.21
class producto {
  constructor(code, nombre, categoria, precio, stock,){
    this.code = code
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    this.stock = stock
    
  }
  aumentarPrecio(porcentajeAumento){
    this.precio *= porcentajeAumento
  }
  aumentarStock(cantidadProducto){
    this.stock += cantidadProducto
  } 
}
const producto1 = new producto("R111", "RetratoFamiliar", "decoracion", 22000, 10)
const producto2 = new producto("R112", "RetratoFamoso", "decoracion", 20000, 15)
const producto3 = new producto("M111", "MacetaRectangularGrisExterior", "macetas", 7000, 25)
const producto4 = new producto("M112", "MacetaRectangularNegraInterior", "macetas", 6500, 15)
const producto5 = new producto("MT111", "MateExagonalMadera", "mate", 4500, 45)
const producto6 = new producto("MT112", "MateObaladoVidrio", "mate", 4500, 35)


producto1.aumentarPrecio(1.25)
producto1.aumentarStock(10)
console.log(producto1)

producto2.aumentarPrecio(1.25)
producto2.aumentarStock(5)
console.log(producto2)

producto3.aumentarStock(15)
console.log(producto3)

const productos=[producto1, producto2, producto3, producto4, producto5, producto6]
console.table(productos)

//funciones de orden superior

 productos.forEach((produc) =>{
  produc.precio *= iva
  console.table(produc)
 })

//consultar el articulo mayores a $20000
console.log(productos.filter(produc => produc.precio>=20000))

// Calcular el valorizado general de mi stock actual
const valorizacion =productos.map(productos => Math.ceil(productos.precio * productos.stock) 
)
console.log(valorizacion)

console.log("EL VALORIZADO TOTAL EN MERCADERIA ES " + valorizacion.reduce((general, total) =>general+total ,0 ))




// Aplicar Arrays en Objetos. 

const categorias = [ "retratosPersonalizados", "retratosFamoso", "cuadrosDecorativo","macetas", "centrosDeMesa", "microMosaico"]
for (let i= 0; i <categorias.length; i++){
  console.log ("mis categorias son = " + categorias[i])
  }

categorias.splice(5,0,"matesDecorados")// lo quiero agregar en la ante ultima posición
console.log(categorias)

categorias.push("anillosMicroMosaico")//lo quiero agregar al final
console.log (categorias)

//mi lista de articulos
const centrosDeMesa =["plato", "figura3D", "jarron", "florero"]
const macetas =["exterioresRedonda","exterioesRectangular", "interioresRedonda","interioesRectangular" ]
const matesDecorados =["MateExtagonal", "MateOvalado"]


// concatenar centrosDeMesa + matesDecorados + macetas
const promo2x1 = centrosDeMesa.concat(matesDecorados).concat(macetas)
console.log(promo2x1)

//como busca si existe O NO el articulo
let articulo = prompt ("¿Que producto desea BUSCAR?")
const indice = promo2x1.indexOf(articulo)
if (indice != -1){
console.log("El producto si esta DISPONIBLE ")
console.log(promo2x1[indice])
alert("El producto si esta DISPONIBLE", indice)
}
else{
 console.log("El producto no EXISTE")
 alert("El producto no EXISTE", indice)
}








