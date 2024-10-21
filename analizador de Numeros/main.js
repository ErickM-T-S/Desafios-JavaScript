var numero = document.getElementById('numero')
var analizador = document.getElementById('analize_numero')
let res = document.getElementById('resultado')
let valores = [ ]
function Adicionar(){
   if(Number(numero.value) >=  1 && Number(numero.value) <= 100)
   {
      
        let item = document.createElement('option')
        item.text = ` o numero ${numero.value} foi adicionado`
        analizador.appendChild(item)
        res.innerHTML=''
        numero.focus()
        return valores.push(Number(numero.value))
       
        
}else{
    alert('coloque um numero entre 1 e 100')
}

}

function Analizar(){
    if(numero.value.length== 0)
    {
        alert('[Error] adicione um numero')
   }
else{   
  
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
   
   for(let pos in valores){
    soma += valores[pos]
    
    if(valores[pos] > maior){
        maior = valores[pos]
    }if(valores[pos] < menor){
         menor = valores[pos]

   }
}
   media = soma/ valores.length
   res.innerHTML = ''
   res.innerHTML += `<p>a tabela possui ${valores.length} números </p> `
   res.innerHTML += `<p> eles em ordem ficam ${valores.sort()} </p>`
   res.innerHTML += `<p> o menor valor é ${menor} e o maior é ${maior} </p>` 
   res.innerHTML += `<p> a soma dos números é igual a ${soma} e a sua média é igual a ${media} </p>`

}
}