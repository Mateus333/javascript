function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#D99379'
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#FF6D00'
    }else {
        //BOA NOITE!
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#4A3B59'
    }
}
