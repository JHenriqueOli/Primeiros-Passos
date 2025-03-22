var inferno = new Date()
var hora = inferno.getHours()
console.log(`Agora é ${hora} horas`)
if (hora < 4) {
    console.log('vai dormir vagabundo')
} else if (hora < 12){
    console.log('Bom dia!!!')
} else if (hora < 18) {
    console.log('Boa tarde')
} else if (hora > 17) {
    console.log('Boa noite')
}