let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosAPI()

async function getBuscarLivrosAPI()
{
    const resp = await fetch(endPointAPI)
    livros = await resp.json()

    let livrosComDesconto = aplicarDesconto(livros)

    exibeLivros(livrosComDesconto)
}

