let num = [5, 8, 2, 9, 3]
num[3] = 6 // Substitui o valor do índice 3 por 6
num.push(7) // Adiciona o valor 7 ao final do array
num.length // Retorna a quantidade de elementos do array
num.sort() // Organiza os elementos do array em ordem crescente
console.log(num)

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(num[pos])
}

let pos = num.indexOf(8) // Retorna o índice do valor 8

if(pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}