function carregar(){
    var horas = document.querySelector("p.horario")
    var imagem = document.getElementById('imagem')
    
    var data =  new Date()
    var hora = data.getHours()
    
   
    if(hora >= 0 && hora <12)
    {    
        horas.innerHTML = `agora são ${hora} horas, bom dia!!`
        imagem.src='fotomanha.jpg'
        document.body.style.background ="#d6c996"
        
    }
    else if(hora >=12 && hora <18)
    {
        horas.innerHTML = `agora são ${hora} horas, boa tarde!!`
        imagem.src ='fototarde.jpg'
        document.body.style.background ='#e79f4b'
    }  

    else{
                horas.innerHTML = `agora são ${hora} horas, boa noite!!`
        imagem.src='fotonoite.jpg'
        document.body.style.background ='#1a324c'
    }

}