let amigo = {
    nome: 'Jose', 
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
/*
programacao orientada a objeto em JS, quando colocamos uma variavel e depois {} chaves isso nao é bloco é do tipo object, objeto, basicamente com array ao inves dos elementos ou indices ser 0,1,2,3 e etc, voce ja coloca o nome do indice que chamamos de atributo, que usamos no exemplo aula 17, nome, peso, e eles tem os valores dentro desse atributo.
*/
