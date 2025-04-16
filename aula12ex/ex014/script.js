function carregar () {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imagem/manha.png'
        document.body.style.background = 'rgb(145, 200, 240)'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'imagem/tarde.png'
        document.body.style.background = 'rgb(255, 200, 90)'
    } else {
        // boa noite
        img.src = 'imagem/noite.png'
        document.body.style.background = 'rgb(40, 36, 56)'
    }
}
