let num = document.querySelector('input#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    }else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }
}