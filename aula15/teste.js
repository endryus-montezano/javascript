let num = [5, 8, 2, 9, 3]

num.push(1) // tomar cuidado com a ordem
num.sort() // ordenação crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[1]}`)
console.log(num[3])   

let pos = num.indexOf(8) // let pos = num.indexOf(4) - nao existe
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está ma posição ${pos}`)
}

