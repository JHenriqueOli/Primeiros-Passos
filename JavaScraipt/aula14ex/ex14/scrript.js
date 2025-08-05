function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = `Contando: `
        //window.alert('Tudo ok')
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number( pas.value)
        if (p<=0) {
            window.alert('passo invalido! Considerando passo 1')
            p = 1
        }
        if ( i < f) {
            //contagem crescente
            for (let c = i; c <= f; c+= p){
            res.innerHTML += ` ${c} \u{1F601}`
            //procurar o emoji no site unicode emoji list e colocar \u{o codigo sem U+}
            }
        } else {
            //contagem regressiva
            for (c=i; c>= f; c-=p){
                res.innerHTML += ` ${c} \u{1F601}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}