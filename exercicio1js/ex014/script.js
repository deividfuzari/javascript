function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var imgContainer = window.document.getElementById('foto')
    var data = new Date
    //var hora = data.getHours()
    var hora = 21
    msg.innerText = `Agora são exatamente ${hora} horas.`
    console.log(img)
    if ( hora > 0 && hora <12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        
        console.log(img.style)
        
    }else{
        //boa noite
        img.src= 'noite.png'
        document.body.style.background = '#515154'
    }
}

