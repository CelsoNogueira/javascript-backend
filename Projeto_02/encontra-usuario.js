const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']

let encontrouUsuario = false
let indicedoUsuario = 0

while(!encontrouUsuario) {
    const usuarioAtual = listaDeContatos[indicedoUsuario]
    if (usuarioAtual.startsWith('Z')) {
        encontrouUsuario = true
    console.log(`Usuario encontrado: ${usuarioAtual}`)

    }
    indicedoUsuario += 1


    if (indicedoUsuario === listaDeContatos.length) {
        encontrouUsuario = true
        console.log('Usuário não foi encontrado')
    }
}