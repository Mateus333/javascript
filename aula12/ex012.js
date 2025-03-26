var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

// O IF se caso precisar testar intervalos, é muito mais valioso testar o IF.

if (hora < 5) {
    console.log('Boa Madrugada!!')
} else if (hora < 12) {
    console.log('Bom Dia!!')
} else if(hora == 12) {
    console.log('Bom Meio Dia e Um Bom Almoço!!')
}else if (hora < 18) {
    console.log('Boa Tarde!!')
}else if(hora < 23) {
    console.log('Boa Noite e Bom Descanso!!')
}else {
    console.log('Horário Inválido')
}