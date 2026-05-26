function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anotxt = Number(document.querySelector('#txtano').value)
    var idade =  ano - anotxt
    var sexo = document.querySelector('input[name="sexo"]:checked').value
    var img = document.querySelector('#img')
    img.setAttribute('id', 'foto')
    var res = document.querySelector('#res')

    if (anotxt > ano || anotxt == 0) {
        res.innerHTML = 'Verifique os dados e tente novamente.'
    } else if ((idade >= 0 && idade < 10) && sexo == 'M') {
        res.innerHTML = `Você tem ${idade} anos. Você é uma criança.`
        img.scrollIntoView()
        img.innerHTML = `<img src="jovem.webp" alt="foto de um menino criança">`
    } else if ((idade < 21) && sexo == 'M') {
        res.innerHTML = `Você tem ${idade} anos. Você é um jovem.`
        img.scrollIntoView()
        res.innerHTML += `<img src="jovem.webp" alt="foto de um menino bebê">`
    } else if ((idade < 50) && sexo == 'M') {
        res.innerHTML = `Você tem ${idade} anos. Você é um adulto.`
        img.scrollIntoView()
        res.innerHTML += `<img src="adulto.webp" alt="foto de um homem adulto">`
    } else if ((idade >= 50) && sexo == 'M') {
        res.innerHTML = `Você tem ${idade} anos. Você é uma idoso.`
        img.scrollIntoView()
        res.innerHTML += `<img src="idoso.png" alt="foto de uma homem idoso">`
    } else if ((idade >= 0 && idade < 10) && sexo == 'F') {
        res.innerHTML = `Você tem ${idade} anos. Você é uma criança.`
        img.scrollIntoView()
        res.innerHTML += `<img src="m jovem.png" alt="foto de uma menina criança">`
    } else if ((idade < 21) && sexo == 'F') {
        res.innerHTML = `Você tem ${idade} anos. Você é uma jovem.`
        img.scrollIntoView()
        res.innerHTML += `<img src="m-jovem.png" alt="foto de uma menina jovem">`
    } else if ((idade < 50) && sexo == 'F') {
        res.innerHTML = `Você tem ${idade} anos. Você é uma adulta.`
        img.scrollIntoView()
        res.innerHTML += `<img src="m-adulta.jpg" alt="foto de uma mulher adulta">`
    } else if ((idade >= 50) && sexo == 'F') {
        res.innerHTML = `Você tem ${idade} anos. Você é uma idosa.`
        img.scrollIntoView()
        res.innerHTML += `<img src="m-idosa.avif" alt="foto de uma mulher idosa">`
    }
}