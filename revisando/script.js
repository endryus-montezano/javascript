function carregar() {
    var mensagem = document.querySelector('#mensagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`
}

function calcular() {
    var tn1 = document.querySelector('#txtn1')
    var tn2 = document.querySelector('#txtn2')
    var resultado = document.querySelector('#resultado')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    resultado.innerHTML = `O resultado de ${n1} e ${n2} é <strong>${soma}</strong>`
    if (tn1.value.length == 0 || tn2.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    }
}