let num = document.querySelector('#numero');
let lista = document.querySelector('#numeros');
let res = document.querySelector('#resultado');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {       
        return false;
    }
}

function adicionarNumero() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
    } else {
        alert('Valor inválido ou já adicionado.');
    }

    num.value = '';
    num.focus();

}

function finalizarAnalise(){
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.');
    } else {
       res.innerHTML = '';
       res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`;
       res.innerHTML += `<p>O maior valor informado foi ${Math.max(...valores)}.</p>`;
       res.innerHTML += `<p>O menor valor informado foi ${Math.min(...valores)}.</p>`;
       let soma = valores.reduce((a, b) => a + b, 0);
       res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
       res.innerHTML += `<p>A média dos valores é ${soma / valores.length}.</p>`;
    }
}