var formulario = document.forms.formulario_vradelantadacp
var resultado = document.getElementById("for-vr-adelantadacp")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizaciones.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let m = parseFloat(formulario.capitalizaciones.value)
    let j = parseFloat((formulario.interes.value)/100)
    const pri = r*(((1+(j/m)))**m)
    const seg = ((((1+(j/m)))**(m*n))-1)/(j/m)
    const tre = ((j/m))/((((1+(j/m)))**m)-1)
    const  total = (pri*seg)*tre

    resultado.innerHTML = total.toFixed(2)
}