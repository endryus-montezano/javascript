//let amigo = {nome: 'josé', sexo: 'M', peso: 85.4, engordar(p){}}

let amigo = {nome: 'josé', 
    sexo: 'M', 
    peso: 85.4, 
    engordar(p){
        console.log('engordou')
        this.peso += p
    }}
// console.log(typeof amigo) // object

// console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)