function contar() {
 var inicio = parseInt(document.querySelector('#inicio').value)
 var fim = parseInt(document.querySelector('#fim').value)
 var passo = parseInt(document.querySelector('#passo').value)
 var contando = document.querySelector('#contando')

    if (passo <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1 

        contando.innerHTML = 'Contando: '
        for (var c = inicio; c <= fim; c += passo) {
            contando.innerHTML += ` ${c} \u{1F449}`
        } 
        contando.innerHTML += ` \u{1F3C1}`
        
     } else{
        if (inicio > fim) {
        contando.innerHTML = 'Contando: '
        for (var c = inicio; c >= fim; c -= passo) {
                contando.innerHTML += ` ${c} \u{1F449}`
        }
        contando.innerHTML += ` \u{1F3C1}`
     } else {
        contando.innerHTML = 'Contando: '
        for (var c = inicio; c <= fim; c += passo) {
            contando.innerHTML += ` ${c} \u{1F449}`
        }
        contando.innerHTML += ` \u{1F3C1}`
     }
   }
}
