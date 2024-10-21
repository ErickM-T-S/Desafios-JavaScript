function Contar(){
var inicio = document.getElementById("inicio")
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var contagem = document.getElementById('contagem')

    if(inicio.value.length == 0 || fim.value.length == 0 ){
    contagem.innerHTML = 'impossivel contar'
    alert('[Error] impossivel contar')
    }
    else{ 
        contagem.innerHTML ='contando: <br>'
    let i = Number(inicio.value)
    let f= Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0){
        alert('passo invalido! considerando passo 1')
        p = 1
    }
    if(i <f){ 
        //contagem progressiva
        for( var c =i;  c <= f ; c += p ){
            contagem.innerHTML += `${c} \u{1F449} `
        } 
    }
   else{ 
     //contagem regressiva
    for(var c = i; c >= f;  c -= p ) 
    {
        contagem.innerHTML += `${c} \u{1F449} `
    }
}
 contagem.innerHTML += `\u{1F3C1}`
}
}