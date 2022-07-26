/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/
let number = 1   // expressao

console.log(number + 1) // operador binario
console.log(++number) // unario algum tipo de operador
console.log(true ? 'alo' : 'nada') // unico ternario 
console.log(false ? 'alo' : 'nada') // unico ternario 


// NEW - Criar um novo objeto
let name = new String('Vitor')
let age = new Number('41')
console.log(name, age)
let date = new Date('2022-06-21')
console.log(date)


// Operadores unários
    // typeof
    // delete

const pessoa = {
    name: "Vitor",
    age: 41,
}
console.log(pessoa)
delete pessoa.age
console.log(pessoa)

// OPERADORES ARITIMETICOS

// multiplicacao
console.log(2 * 4)

// divisao
console.log(12 / 2)

//soma
console.log(34 + 67)

// subtracao
console.log(32 - 8)

// Resto da divisao
let restante
restante = 11 % 9
console.log(restante)

// incremento ++
let incremento = 0
incremento++
console.log(incremento)

// decremento --
let decremento = 0
decremento--
console.log(decremento)

//exponencial **
console.log(3 ** 3)
console.log(2 ** 2)

// Grouping operator ()
let total = (2 + 3) * 5
console.log(total)

// OPERADORES DE COMPARACAO

// Ira comparar valores e retornar um Boolean

let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == '1') // aqui ele compara o valor, mesmo sendo string

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != 1)

// === estritamente igual a 
console.log(one === "1")// tem que ser estritamente igual, valor ok , mas não é string
console.log(one === 1) // valor igual e tambem é um numero, entao True

// !== estritamente diferente a
console.log(two !== "2")
console.log(two !== 2)

// Operadores de atribuição

let x

// assignment
x = 1

//addition assignement
// x = x + 2
x += 2

// subtration assignement
// x = x - 1
x -= 1

// multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2 

// remainder, exponetiation
x %= 2
x **= 2

// VALORES E BOOLEANOS

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao)  // se é verdadeiro vira falso, operador de negação


//*********** */ OPERADOR CONDICIONAL (TERNARIO)

// Dependo da condição, nós receberemos valores diferentes
// Condição então valor 1 se não valor 2
// condition ? value1 : value2          

// Exemplos
// Café da manhã top

let pao2 = true
let queijo2 = false

const niceCafe = pao2 || queijo2 ? "Café top" : "Café ruim"     // : = senao

console.log(niceCafe)

// maior de 18

let idade = 16

const podeDirigir = idade >= 18 ? "Pode Dirigir" : "Não pode dirigir"
console.log(podeDirigir)

/*  FALSY 
    Quando um valor é considerado false em contextos onde um booleano é obrigatório
    (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log(false ? 'verdadeiro' : 'falso')
console.log(0 ? 'verdadeiro' : 'falso')
console.log(-0 ? 'verdadeiro' : 'falso')
console.log("" ? 'verdadeiro' : 'falso')
console.log(null ? 'verdadeiro' : 'falso')
console.log(undefined ? 'verdadeiro' : 'falso')
console.log(NaN ? 'verdadeiro' : 'falso')

/* TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório
    (condicionais e loops)
    
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(true ? 'verdadeiro1' : 'falso1')
console.log({} ? 'verdadeiro1' : 'falso1')
console.log([] ? 'verdadeiro1' : 'falso1')
console.log(1 ? 'verdadeiro1' : 'falso1')
console.log(3.23 ? 'verdadeiro1' : 'falso1')
console.log("0" ? 'verdadeiro1' : 'falso1')
console.log("false" ? 'verdadeiro1' : 'falso1')
console.log(-1 ? 'verdadeiro1' : 'falso1')
console.log(Infinity ? 'verdadeiro1' : 'falso1')
console.log(-Infinity ? 'verdadeiro1' : 'falso1')

/* Operator precedente
    Precedência de operadores

* grouping ()
* negacao e incremento
* multiplicacao e divisao * /
* adição e subtração + -
* relacional  < <= > >=
* igualdade == != === !==      ===(extamente igual)
* AND  &&
* OR   ||
* condicional   ?:
* assigment (atribuicao)  = =+ -= *=
*/
console.log(( 2+ 5) * 10)


