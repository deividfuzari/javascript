let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

esse for normal que aprendemos
for(let pos=0; pos < valores.length; pos++){
    console.log(`na posição ${pos} tem o valor ${valores[pos]} `)
}
*/

//forma mais simplificada para vetores ou array ou variaveis compostas.

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//primeiro elemento do for é o INDICE, depois A VARIAVEL COMPOSTA.
