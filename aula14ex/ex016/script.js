function contar() {
    let inicio = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let passo = document.getElementById('num3')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO] Faltam dados!!!')
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { 
            // Contagam crescente
           for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
        }
        } else {
            // Contagem regressiva
            for (c = i; c > f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}