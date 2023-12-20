function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('Digite um numero')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //basicamente para quando pedir outra tabuada deletar a anterior dentro do select
        while ( c <= 10) {
            let item = document.createElement('option') // cria um elemento ou tag
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab${c}`
            tab.appendChild(item) //adicionar o elemento item no tab, o item
            c++
        }
    }
}