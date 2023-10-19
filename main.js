
//calcular el coto final de producto con iva + envio incluido


function CalcularCosto (costo1, iva, envio){
    console.log(costo1 * iva + envio)
    let resultado = costo1 * iva + envio
    return costo1 + resultado
  }
 
 let consultas = true
 do{
    let ValorCosto= parseFloat(prompt("Ingresar el costo de articulo y se CALCULA EL PRECIO TOTAL"))
    let precioTotal= CalcularCosto(ValorCosto, 0.21, 1000)
    alert("EL PRECIO TOTAL A PAGAR ES  " + precioTotal)

    let respueta = prompt("¿Requiere hacer otra consulta de precio?")
    
    if (respueta == 'no')
        consultas = false
} while (consultas == true)