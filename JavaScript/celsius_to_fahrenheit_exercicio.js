
/* Celsius em fahrenheit

Crie uma funcao que recebe uma string em celsius ou faheheit e faça a transformação
de uma unidade para outra

C = (F - 32) * 5 / 9
F = C * 9 / 5 + 32

*/

// transform('50F')

function transformGraus(graus) {
    const celsiusExiste = graus.toUpperCase().includes('C')
    const fahrenheitExiste = graus.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExiste && !fahrenheitExiste) {
       throw new Error('Grau não identificado.') 
    }

    // fluxo ideal, F -> C
    let updateGraus = Number(graus.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let grausSinal = 'C'

    // fluxo alternativo C -> F
    if(celsiusExiste) {
        updateGraus = Number(graus.toUpperCase().replace("C", ""));
        formula = celsius  => celsius * 9/5 + 32 
        grausSinal = 'F'

    
}
    return formula(updateGraus) + grausSinal

}



try {
    console.log(transformGraus('10C'))
    console.log(transformGraus('50F'))
    transformGraus('50Z')
} catch (error) {
    console.log(error.message)
}
