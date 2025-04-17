function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2, 5))

// console.log(soma(2)) // quando falta um número ele é indefinido (numero(no caso 2) + indefinido(sem número) é NaN(não é um número)) ---- para resolver isso eu passo um parametro Predefinidos (n1=0, n2=0)