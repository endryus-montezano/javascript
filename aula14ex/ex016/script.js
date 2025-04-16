function contar() {
    let ini = document.querySelector('#txtinicio')
    let fim = document.querySelector('#txtfim')
    let passo = document.querySelector('#txtpasso')
    let resultado = document.querySelector('#resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO faltam dados!')
        resultado.innerHTML = 'Impossivel contar'
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido ! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }    
        } else {
            // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += `  ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}