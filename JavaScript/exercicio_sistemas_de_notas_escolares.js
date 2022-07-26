/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numéricos para sistemas de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

// aqui todo código vai transformar em uma funcao

function getNota(nota) {
    let A = nota >= 90 && nota <= 100
    let B = nota >= 80 && nota <= 89
    let C = nota >= 70 && nota <= 79
    let D = nota >= 60 && nota <= 69
    let F = nota >= 0 && nota < 60
    
    let notaFinal;
    
    if(A){
        notaFinal = "Sua média é A"
    }
    else if(B) {
        notaFinal = "Sua média é B"
    }
    else if(C) {
        notaFinal = "Sua média é C"
    }
    else if(D) {
        notaFinal = "Sua média é D"
    }
    else if(F) {
        notaFinal = "Sua média é F"
    }
    else{
        notaFinal = "Digitou uma nota válida"
    }

    return notaFinal
}
    

console.log(getNota(101))   // aqui vc coloca a nota (101)
console.log(getNota(-1))
console.log(getNota(50))
console.log(getNota(1))
console.log(getNota(45))
console.log(getNota(60))
console.log(getNota(75))
console.log(getNota(95))
