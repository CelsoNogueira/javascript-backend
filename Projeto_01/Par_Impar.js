const listaDeNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
const listaPares = []
const listaImpares = []

let contador = 0

while (contador < listaDeNumeros.length) {
    if (listaDeNumeros[contador] % 2 === 0) {
        listaPares.push(listaDeNumeros[contador])
    }
    else {
        listaImpares.push(listaDeNumeros[contador])
    }
    contador += 1
}

console.log(listaPares)
console.log(listaImpares)