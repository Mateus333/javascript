function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'homem-bebe.jpg')
            } else if (idade < 21 ) {
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'homem-maduro.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10) {
                //Criança
            } else if (idade < 21 ) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}