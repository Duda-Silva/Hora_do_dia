function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let msg2 = window.document.getElementById('msg2')
    let data = new Date() // data atual
    let dia = data.getDate() //dia
    let ano = data.getFullYear() //ano
    let hora = data.getHours() // hora 
    let min = data.getMinutes()// minutos
    
    msg.innerHTML = `<h4>Hoje é ${dia} de Março de ${ano} e são ${hora} horas e ${min} minutos.</h4>`

    if(hora >= 1 && hora < 12){
        //bom dia
        img.src = './img/fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = '<h2>Bom dia!</h2>'
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = './img/fototarde.png'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = '<h2>Boa tarde!</h2>'
    } else{
        //boa noite
        img.src = './img/fotonoite.png'
        document.body.style.background = '#515154'
        msg2.innerHTML = '<h2>Boa noite!</h2>'
    }

}



