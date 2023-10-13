var formulario = document.forms.valactcapti
var resultado = document.getElementById("val-act-capti")
 
formulario.tiempo.oninput = calcularAV

formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.renta.value)
  let n = parseFloat(formulario.tiempo.value)
  let i = parseFloat((formulario.interes.value)/100)
  
  let total = r*((1-((1+i)**-n))/i)
  resultado.innerHTML = total.toFixed(2)

}

}