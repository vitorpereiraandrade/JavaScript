var clima = "Quente"
console.log(clima)

clima = "Frio" // aqui estou mudando a variavel de quente para frio
console.log(clima)

let clima2 = "Muito frio" // Esta variavel é igual a var
console.log(clima2)

const clima3 = "Muito quente" // a constante não pode mudar ela é constante
console.log(clima3)



// Tipo dinamicos

let teste = ""
let teste2 = true

console.log(typeof teste)
console.log(typeof teste2)

// Block statement

{
    let x = 0
    console.log(x)
}

// var é global e tambem local

console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)

// Let e const
// const e let sao locais e só funcionam no escopoe onde foi criada

let y = 0;

{
    let y = 1
    console.log('existe Y', y)    
    
}

console.log('existe y depois do bloco?', y)

// Nomeando variaveis

let name1 = "Vitor"
console.log(name1)

let checkIfNameExists = name1 === "Vitor"
console.log(checkIfNameExists)

// tambem pode ser check_if_name_exists