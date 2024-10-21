function Gerar(){
var numero = document.getElementById('Numero')
var tabuada = document.getElementById('tabuada')
if(numero.value.length == 0){
    alert('[Erro] coloque um numero ')

}
else{
    var num = Number(numero.value)
    let c = 1 
    tabuada.innerHTML ='' //limpa as multiplicações ja existentes 
  
while(c <=20){
   let item = document.createElement('option')//cria uma option para a select
   item.text = `${num} x ${c} = ${num*c}`//  multiplicação e o seu resultado
   tabuada.appendChild(item) //adiciona a multiplicação ao select
   c++


}

}

}
