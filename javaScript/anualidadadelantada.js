var formulario = document.forms.formulario_vradelantada
var resultado = document.getElementById("for-vr-adelantada")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV



function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = (((((1+i)**n)-1)/i)*(1+i)*r)

    resultado.innerHTML = total.toFixed(2)
    console.log(total)
}