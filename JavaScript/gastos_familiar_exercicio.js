/* # Sistema de gastos familiar

Crie um objeto que possuira 2 propriedades, ambas do tipo array:

    * receitas: []
    * despecas: []

Agora, crie uma funcao que irá calcular o total de receitas e despesas e irá mostrar
uma mensagem se a familia está com saldo positivo ou negativo, seguido do saldo.

*/

let familia = {
    receitas: [1000, 2000, 5000, 7000, 8000],
    despesas: [50000, 480.89, 780.98, 870, 500]
}

function soma(array) {
    let total = 0;

    for(let valor of array) {
        total += valor
    }

    return total
}

function calcularBalanco() {
    const calcularReceitas = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)

    const total = calcularReceitas - calcularDespesas

    const ok = total >= 0

    let balancoTexto = "negativo"

    if (ok) {
        balancoTexto = "positivo"

    }

    console.log(`Seu saldo é ${balancoTexto}: R$${total.toFixed(2)}`)
}

calcularBalanco()


