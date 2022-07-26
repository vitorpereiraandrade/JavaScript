// for
// break - para execução do loop
// continue - pula execução do momento

for(let i = 0; i < 11; i++) {
    console.log(i)
}

for(let i = 10; i > -1; i--) {
    console.log(i)
}

for(let i = 10; i > 0; i--) {
    if(i === 5){
        break
    }

    console.log(i)
}

for(let i = 10; i > 0; i--) {
    if(i === 5){
        continue
    }

    console.log(i)
}
 
// while - enquanto   -  quando sabe o momento da parada usa while

let i = 0
while(i < 10){
    console.log(i)

    i++
}

let i2 = 49586394505
while(i2 > 10) {
    console.log(i2)

    i2 /= 35
}

// for ... of  

let name = 'Vitor'
let names= ['Joao', 'Paulo', 'Pedro']

for(let char of name) {
    console.log(char)
}
for(let name of names) {
    console.log(name)
}

// For in

let pessoa = {
    name: 'Vitor',
    age: 30,
    weigth: 88.6
}

for(let propriedade in pessoa){
    console.log(propriedade)
    console.log(pessoa[propriedade])
}
