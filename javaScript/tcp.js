var formulario = document.forms.formulario_tiempoa
var resultado = document.getElementById("tiempoa")

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let m = parseFloat(formulario.monto.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = ((Math.log10((m*i)+(r*(1+i))))-(Math.log10(r*(1+i))))/(Math.log10(1+i))

    resultado.innerHTML = total.toFixed(2)
}
