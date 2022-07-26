/* Buscando e contando dados em Array   

Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o número de livros em cada categoria 
    * Contar números de autores
    * Mostrar livros do autor Augusti Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver
    os livros desse autor.


*/

const livrosPorCategoria = [
    {
        categoria: "Riqueza",
        livros: [
            {
                titulo: "Os segredos da mente milionária",
                autor: "T. Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor: "Geroge S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter"
            },    
        ],
    },

    {
        categoria: "Inteligência Emocional",
        livros: [
            {
                titulo: "Você é Insubstituível",
                autor: "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury",  
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stepehen R. Covey", 
            }
        ],
    },
];

const totalCategorias = livrosPorCategoria.length

console.log(totalCategorias);
for(let categoria of livrosPorCategoria) {
    console.log('Total de livros da categoria: ', categoria.categoria)
    console.log(categoria.livros.length)
}

function contarAutores() {
    let autores = [];

    for(let categoria of livrosPorCategoria) {
        for(let livro of categoria.livros) { 
            if(autores.indexOf(livro.autor) == -1) {
                autores.push(livro.autor);
            }  
       }
    }

    console.log("Total de autores: ", autores.length)
}

contarAutores();

function livrosAugustoCury() {
    let livros = [];

    for(let categoria of livrosPorCategoria) {
        for(let livro of categoria.livros) { 
            if(livro.autor === 'Augusto Cury') {
                livros.push(livro.titulo);
            }  
       }
    }

    console.log("Livros do autor: ", livros)
}

livrosAugustoCury()

function livrosAutor(autor) {
    let livros = [];

    for(let categoria of livrosPorCategoria) {
        for(let livro of categoria.livros) { 
            if(livro.autor === autor) {
                livros.push(livro.titulo);
            }  
       }
    }

    console.log(`Livros do autor ${autor}: ${livros.join(", ")}`);
}

livrosAutor('Augusto Cury')
livrosAutor('Geroge S. Clason')