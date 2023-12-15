var idade= 22
console.log(`voce tem ${idade} anos`)
if (idade < 16){
    console.log('Voce nao VOTA')
}else if ( idade < 18 || idade > 67){
    console.log('Voce tem voto OPCIONAL')
}else{
    console.log('voce é Obrigado a VOTAR')
}

