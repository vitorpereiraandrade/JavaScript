// Criar um plicativo de frase motivacionais


// Declaracao da funcao
// Function statement
function createPhrases() {
    console.log('Estudo é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
    console.log('Teste')
}

// executar a funcao
// rodar, chamar a funcao
// execute run, call, invoke

createPhrases()
createPhrases()
createPhrases()

console.log('Fim do programa')



//function expression
//function anonymous

// parametros da funcao
const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2, 3) // arguments   \  sum = soma
sum(5,3)
sum(56, 3057889)


const soma = function(number3, number4) {
     let total = number3 + number4
    return total
}

let number3 = 34
let number4 = 25

console.log(`o numero 3 é ${number3}`)
console.log(`o numero 4 é ${number4}`)
console.log(`a soma é ${soma(number3, number4)}`)


// Função é um liquidificador

function fazerSuco(fruta1, fruta2){
    return 'Suco de: '+ fruta1 + fruta2
}


const copo = fazerSuco('banana', 'maca')
console.log(copo)

// function scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink())
console.log(subject)

// function hoisting

sayMyName()

function sayMyName() {
    console.log('Vitor')
}

// arrow function

const sayYourName = () => {
    console.log('Vitor')
}
sayYourName()

// callback function

function sayHeName(name) {
    console.log('Antes de executar a funcao callback')
    name()
    console.log('Depois de executar a callback')
}
sayHeName (
    () => {
        console.log('Estou em uma callback')
    }
)


/* Function() constructor

*expressao new
* criar um novo objeto
* this keyword

*/
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const vitor = new Person("Vitor")
const joao = new Person("Joao")
console.log(vitor.walk())
console.log(joao.walk())
