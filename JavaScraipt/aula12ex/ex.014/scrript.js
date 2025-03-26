function carregar() { 
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora =  data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //bom dia
    document.body.style.background = '#e2cd9f'
    img.src = "imagem/manha.png"
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    document.body.style.background = '#b9846f'
    img.src = "imagem/tarde.png"
} else{
    //boa noite
    document.body.style.background = '#515154'
    img.src = "imagem/noite.png"
}
}