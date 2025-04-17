let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)

/*
console.log(num[0]) 
console.log(num[1]) 
console.log(num[2]) 
console.log(num[3]) 
console.log(num[4]) 
console.log(num[5]) 


for(let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// jeito mais facil de fazer

for(let pos in valores) {  // nao tem 3 elementos igual o for normal
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

