function criar(){
    var num = parseInt(document.querySelector('#numero').value)
    var tabuada = document.querySelector('#tabuada')

    for(var i = 0; i <=12; i++){
        tabuada.innerHTML += `<option>${num} x ${i} = ${num*i}</option>`
    }
}