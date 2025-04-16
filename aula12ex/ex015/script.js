function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    var img = document.querySelector('#foto')
    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        //res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'imagem/menino.png'
            } else if (idade < 21) {
                //jovem
                img.src = 'imagem/jovemM.png'
            } else if (idade < 50) {
                //adulto
                img.src = 'imagem/homem.png'
            } else {
                //idoso
                img.src = 'imagem/senhor.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'imagem/menina.png'
            } else if (idade < 21) {
                //jovem
                img.src = 'imagem/jovemF.png'
            } else if (idade < 50) {
                //adulto
                img.src = 'imagem/mulher.png'
            } else {
                //idoso
                img.src = 'imagem/senhora.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}