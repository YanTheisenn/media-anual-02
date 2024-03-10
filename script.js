function calcular(){
    var selectedValue = document.getElementById("materia").value;

    let media1 = document.querySelector('input#media-primeiro-trimestre')
    let media2 = document.querySelector('input#media-segundo-trimestre')
    let media3 = document.querySelector('input#media-terceiro-trimestre')

    let med1 = Number(media1.value)
    let med2 = Number(media2.value)
    let med3 = Number(media3.value)

    let resposta = document.querySelector('h1#resposta')

    var res = (med1 + med2 + med3) / 3

    resposta.innerHTML = `Sua média em ${selectedValue[0].toUpperCase()+selectedValue.substring(1)} é de ${res.toFixed(2)}`
}