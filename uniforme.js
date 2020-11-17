const btnUniforme = document.getElementById('botao_normal')

let distrib_Nomal = ( )=> {
const maximo = document.getElementById('pontoMaximo').value
const minimo = document.getElementById('pontoMinimo').value
let intervalo
let select = document.getElementById('opcoes_Duniforme').value
let elemento = document.getElementById('valor').value


console.log(select + ' select' )
console.log(elemento + ' elemento')

if( select === "maiorQue"){
    intervalo = maximo - elemento 
    console.log('maior que')
}else if( select === 'menorQue'){
    
    intervalo = elemento - minimo
    console.log('menor que')
} else{
    elemento= elemento.split(';').sort((a,b) => a - b)
    intervalo = elemento[1] - elemento[0]
    console.log('entre')

}

let vetorMinMax = []
vetorMinMax.push(minimo,maximo)
vetorMinMax = vetorMinMax.map(x => Number(x))
console.log(vetorMinMax)

console.log(intervalo)
let media = ((vetorMinMax[1] + vetorMinMax[0])/2).toFixed(2)
console.log(media)
let dp = Math.sqrt((((maximo-minimo))**2/12)).toFixed(2)
console.log(dp)
let cv = ((dp/media)*100).toFixed(2) + "%"
console.log(cv)

function prob(){
  return ((1/(maximo-minimo))*intervalo)*100 
}

console.log(intervalo + ' intervalo dps da func prob')


let escrever_resultado = document.getElementById('resultados')
escrever_resultado.innerHTML =  'A probabilidade é de: ' + prob()+ '%'

document.getElementById('labelMedia').innerHTML = 'Média: ' + media
document.getElementById('labelDP').innerHTML = 'Desvio Padrão: ' + dp


}
btnUniforme.addEventListener('click', distrib_Nomal)