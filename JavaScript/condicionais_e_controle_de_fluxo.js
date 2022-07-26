// Control flow

// Copo sujo
console.log('lavar o copo')

// se não estiver sujo servir café
console.log('servir café')

// If e Else

let tempetaratura = 38
let altaTemperarura = tempetaratura >= 37.5
let mediaTemperatura = tempetaratura < 37.5 && tempetaratura >= 37

if(altaTemperarura){
    console.log('Febre alta')
} 
else if(altaTemperarura){
    console.log("Febre moderada")
}
else{
    console.log('Saudavel')
}


// switch

let expressao = 'c'

switch(expressao) {
    case 'a': 
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para expressao b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

function calculadora(number1, operador, number2) {
    let resultado

    switch (operador){
        case '+':
            resultado = number1 + number2
            break
        case '-':
            resultado = number1 - number2
            break
        case '*':
            resultado = number1 * number2
            break
        case '/':
            resultado = number1 / number2
            break
        default:
            console.log('nao implementado')
            break
    }

    return resultado
}

console.log(calculadora (4, '*', 8))


// THROW - disparar ou lancar

function sayMyName(name = '') {
    if(name === ''){
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

// try ... catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}







