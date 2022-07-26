// Variaveis e tipos de dados

// Declaracao or declaration
var name

// assidment or atribuicao de valores

name = "Mike"



let age, isHuman

age = 18
isHuman = true

console.log(name, age, isHuman)

//multiplo argumentos na funcao
// escrita de texto + as variaveis - concatenando valores
console.log('O ' + name + ' tem ' + age + ' anos.')

// interpolando valores

console.log(`O ${name} tem ${age} anos`)

//OBJETOS

const person = {
    name: 'Vitor',
    age: 30,
    weigth: 88.6,
    isAdmin: true
}

console.log(person)
console.log(person.name)
console.log(`${person.name} tem ${person.age} anos`)

// Arrays

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }    
]
console.log(animals)
console.log(animals[0])
console.log(animals.length)
console.log(animals[2])
console.log(animals[2].name) // acessar a propriedade name.