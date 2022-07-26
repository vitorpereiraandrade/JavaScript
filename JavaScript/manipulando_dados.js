/*
    Prototype 

    * prototype-based language
    * prototype chain
    * _proto_
    */

console.log("Vitor".length) // só pra mostrar as funcoes e tudo

/* Type conversion (typecasting) vs Type coersion

    * Alteracao de um tipo de dado para outro

*/

console.log('9' + 5)
console.log('9' + 7)
console.log(Number('9') + 5)

// Manipulando Strings em Números

// Transformar String em Número em String

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

let word = "Paralelepito"
console.log(word.length)
let number2 = 1234
console.log(String(number2).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula

let number3 = 345.33452345
console.log(number3.toFixed(2).replace(".", ",")) // numero de casas decimas
// trocar ponto por virgula  // virou String, pq numero é com pontos


// Maiusculo em minusculo e vice e versa
let word2 = "Programar é muito bacana!"
console.log(word2.toLowerCase())
console.log(word2.toUpperCase())


// Verificar se o texto contem a palavra amor

let frase = "Eu quero viver o Amor"
console.log(frase.includes('Amor'))


/* Separe um texti que contem espaços, em um novo array onde cada testo é uma
posição do array. Depois disso, transforme o array em um texto e onde eram espaços
coloque _  */

let frase2 = "Eu quero viver o Amor!"
let myArray = frase2.split(" ")  // Separar por espacos
console.log(myArray)
let frase2Underscore = myArray.join("_")
console.log(frase2Underscore)
console.log(frase2Underscore.toUpperCase())


// Criar array com construtor

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// Contar elementos de um Array
console.log(['a', 'b', 'c', 'd'].length)


// Transformar uma cadeia de caracteres em elementos de um array
let word3 = "manipulação"
console.log(Array.from(word3))

// MANIPULANDO ARRAYS

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('node js')
console.log(techs)

// adicionar no começo
techs.unshift("sql")
console.log(techs)

// remover do fim
techs.pop()
console.log(techs)

// remover do começo
techs.shift()
console.log(techs)

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // esse tem que ser junto com o console.log - 
// quero tirar a partir do elemento posicao 1, ate o elemento 3.

// remover 1 ou mais itens em qualquer posicao do array
techs.splice(1, 1) // a partir da posicao 1, 1 elemento no caso sai o css.
console.log(techs)

// encontrar a posicao de um elemento no array
let index = techs.indexOf('html')
console.log(index)






