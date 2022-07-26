// 1 - Declare uma variavel de nome weigth

let weigth

// 2 - Que tipo de dado é variável acima?

console.log(typeof weigth)

/* 3 - Declare uma variavel e atribua valores para cada um dos dados:
    *name = String
    age = Number
    stars: Number (float)
    isSubscribed: Boolean
*/
let name = "Vitor"
let age = 40
let stars = 4.5
let isSubscribed = true 

/* 4 - A variavel student abaixo é de que tipo de dados?
    R: Objeto

    4.1 atribua a ela as mesmas propriedades e valores do exercicio 3
    4.2 Mostre no console a seguinte mensagem:
        name de idade age pesa wiegth kg.

        Atencao, substitua name, age e wiegth pelos valores de cada propriedade do objeto.


*/

let student = {
    name : "Vitor",
    age : 41,
    weight : 91.5,
}
console.log(typeof student)
console.log(`${student.name} de idade ${student.age} anos e ${student.weight} KG`)

// Declare uma variavel de tipo array, de nome students  e atribua a ela nenhum valor, ou seja, Array vazio

let students = []

// Reatribua valor para variavel acima, colocando dentro dela o objeto student da questao 4. ( Nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

students = [
    student
]
console.log(students)

// 7- coloque no console o valor da posicao zero do Array acima

console.log(students[0])

//  - Crie um nome estudent e  coloque na posicao1 do array Students

const john = {
    name: "John",
    age: 23,
    weight: 74.8,

}

students[1] = john
console.log(students)

