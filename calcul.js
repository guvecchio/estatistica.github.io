function limpar() {
  document.getElementById("resultados").innerText = ""
}
var corpot = document.querySelector('thead')
var acmFreq = 0, vetFreq_porcento = []
 let facArray = []

function freqPorcento(repeticao, vetor) { // função de frequencia normal porcento
  console.log(vetor.length + " lenght do parametro vetor")
  let aux = repeticao / vetor.length
  console.log(aux + " variavel aux")

  let percentual = aux * 100

  console.log(percentual + " variavel percentual")
  vetFreq_porcento.push(percentual.toFixed(2))
  vetFreq_porcento = vetFreq_porcento.map(x => parseFloat(x)) // conversão para number

  console.log(vetFreq_porcento + " dentro da função") 

}



let novoVetor = [], vetorFiltrado = [], vetorFrequencia_Simples = [], vetorSortido

function calc() {
  /* document.getElementById('resultados').innerHTML = */
  /*var vari = document.getElementById('nomeVar').value
  alert(vari)*/
  const tipoDado = document.getElementById('tipoCalculo');
  const varNome = document.getElementById('nomeVar').value;
  const inputDados = document.getElementById('entradaDados').value;

  if (tipoDado.value === "qualitativaOrdinal" || tipoDado.value === "qualitativaNominal") { //selecionador de quantitativa ou qualitativa
    alert("QUALITATIVA")
    qualitativaFunc(inputDados);
  }
  else if (tipoDado.value === "quantitativaDiscreta") {
    alert('QUANTITATIVA')
    quantitativaDiscreta_Func(inputDados);
  }
  else {
    alert("INVALIDO")
  }



  function qualitativaFunc(array) {



    //testes branco;azul;preto;preto;branco;branco;vermelho;azul;amarelo;verde


    novoVetor = array.split(";")

     vetorSortido = novoVetor.sort() // organiza o vetor por ordem


    //---------------MEDIANA-------------
    /*
                let mediana
                let somaMediana = (vetorSortido.length / 2) - 1
                if (vetorSortido.length % 2 == 0) {
                  mediana = [vetorSortido[somaMediana], vetorSortido[somaMediana + 1]]
                } else {
              
              
              
                  somaMediana = Math.trunc(somaMediana)
                  mediana = vetorSortido[somaMediana]
                }*/



    console.log(vetorSortido)
    //----------------------------FREQUENCIAS------------------------

    let x, fac = 0
    for (let i = 0; i < vetorSortido.length; i = x) {  //função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
      let freqCont = 1;

      for (x = i + 1; x < vetorSortido.length; x++) {
        if (vetorSortido[i] == vetorSortido[x]) {
          freqCont++;
        } else {
          break;
        }
      }
      fac += freqCont // acumulador para frequencia acumulada
      facArray.push(fac) // push no array de frequencia acumulada
      vetorFrequencia_Simples.push(freqCont); // push no array de frequencia normal

    }
    // let maior = Math.max.apply(null, vetorFrequencia_Simples)
    //let indiceMaior = (vetorFrequencia_Simples.indexOf(maior))*/

    //------------------------FIM FREQUENCIAS -------------------------


    //let media = "Não há"

    vetorFiltrado = vetorSortido.filter((este, i) => vetorSortido.indexOf(este) === i) // tira todos itens repetidos
    // let moda = filteredArray[indiceMaior]





//---------------graficos---------------
let chart = new Chart(document.getElementById('myChart'), {
  //tipo de gráfico
  type: 'pie',

  // dados pro dataset
  data: {
    labels: vetorFiltrado,
    datasets: [{
      label: '%',
      backgroundColor:
        ['rgb(255,99,132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(25, 159, 64, 0.5)',
          //-------------------//
          'rgb(25,9,132, 0.5)',
          'rgba(54, 150, 35, 0.5)',
          'rgba(55, 206, 6, 0.5)',
          'rgba(75, 92, 12, 0.5)',
          'rgba(13, 102, 25, 0.5)',
          'rgba(55, 59, 64, 0.5)'
        ],
      borderColor: '#000',
      data: vetorFrequencia_Simples,
      borderWidth: 0.5
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    title: {
      display: true,
      text: varNome
    }

  }
})





  }





  function quantitativaDiscreta_Func(array) {  //falta adicionar o nome, mas isso é o de menos

    //testes 25;98;54;12;0;1;2;6;4;71;5;30;20;84;4    1;2;2;5;4;1;2;6;4;1;2



    novoVetor = array.split(";").map(x => parseFloat(x));  //separa o array por ";" e com map() passa tudo para Number float


    vetorSortido = novoVetor.sort((a, b) => a - b); //function que o Glenio me passou para ordernar o vetor por ordem crescente

    //mediana 
    /*
      let mediana
      let somaMediana = (sortArray.length / 2) - 1
      if (sortArray.length % 2 == 0) {
        mediana = [sortArray[somaMediana], sortArray[somaMediana + 1]]
      } else {
    
    
    
        somaMediana = Math.trunc(somaMediana)
        mediana = sortArray[somaMediana]
      }*/



   
    let x, fac = 0
    for (let i = 0; i < vetorSortido.length; i = x) {  // função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
      let freqCont = 1;

      for (x = i + 1; x < vetorSortido.length; x++) {
        if (vetorSortido[i] == vetorSortido[x]) {
          freqCont++;
        } else {
          break;
        }
      }
      fac = fac+freqCont // acumulador para frequencia acumulada
      facArray.push(fac) // push no array de frequencia acumulada
      vetorFrequencia_Simples.push(freqCont); // push no array de frequencia normal

    }

    // moda -------------
    /*
  
    let maior = Math.max.apply(null, freqArray)
    let indiceMaior = (freqArray.indexOf(maior))
  */



    vetorFiltrado = vetorSortido.filter((este, i) => vetorSortido.indexOf(este) === i); // função que filtra o vetor para tirar todos números repetidos 
    console.log(vetorFiltrado)







    //let moda = filteredArray[indiceMaior]



//------graficos--------
let chart = new Chart(document.getElementById('myChart'), {
  //tipo de gráfico
  type: 'bar',

  // dados pro dataset
  data: {
    labels: vetorFiltrado,
    datasets: [
      {
        label: 'Frequência',
        data: vetorFrequencia_Simples,
        backgroundColor: ['rgb(255,99,132)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgb(25,9,132, 0.5)',
          'rgba(54, 150, 35, 0.5)',
          'rgba(55, 206, 6, 0.5)',
          'rgba(75, 92, 12, 0.5)',
          'rgba(13, 102, 25, 0.5)',
          'rgba(55, 59, 64, 0.5)'
        ],
      borderColor: 'rgb(255,99,132)',
      
      borderWidth: 1
    }]
  },
  options: {    
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    title: {
      display: true,
      text: varNome
    }

  }
})




  }



  // elemento
  var linha = document.createElement('tr')
  document.getElementById("cabecalho").appendChild(linha)
  var nomev = document.createElement('th');
  var frequenciaSimples = document.createElement('th')
  var vetFreq_porcento_html = document.createElement('th')
  var frequenciaAcumulada = document.createElement('th')
  var frequenciaAcumulada_Porcento = document.createElement('th')
  //  var fi = document.createElement('th');
  //var fper = document.createElement('th');
  // nós


  // vincular


  linha.appendChild(nomev)
  linha.appendChild(frequenciaSimples)
  linha.appendChild(vetFreq_porcento_html)
  linha.appendChild(frequenciaAcumulada)
  linha.appendChild(frequenciaAcumulada_Porcento)

  //linha.appendChild(fi)
  //linha.appendChild(fper)
  nomev.innerHTML = varNome
  frequenciaSimples.innerHTML = "Frequencia Simples"
  vetFreq_porcento_html.innerHTML = "Frequencia Simples %"
  frequenciaAcumulada.innerHTML = "Frequencia Acumulada"
  frequenciaAcumulada_Porcento.innerHTML = "Frequencia Acumulada %"
  // elementos ao doc
  //corpot.appendChild(linha)


  for (let i = 0; i < vetorFiltrado.length; i++) {

    freqPorcento(vetorFrequencia_Simples[i], vetorSortido)

    console.log(vetFreq_porcento + ' dentro do for')
    
    var linha2 = document.createElement('tr')
    document.getElementById("coluna").appendChild(linha2)
    let coluna1 = document.createElement("td");

    let coluna2 = document.createElement("td")
    let coluna3 = document.createElement("td")
    let coluna4 = document.createElement("td")
    let coluna5 = document.createElement("td")


    linha2.appendChild(coluna1);
    linha2.appendChild(coluna2);
    linha2.appendChild(coluna3);
    linha2.appendChild(coluna4);
    linha2.appendChild(coluna5);

    acmFreq += vetFreq_porcento[i]


    coluna1.innerHTML = vetorFiltrado[i]
    coluna2.innerHTML = vetorFrequencia_Simples[i]
    coluna3.innerHTML = vetFreq_porcento[i] + " %"
    coluna4.innerHTML = facArray[i]
    coluna5.innerHTML = acmFreq + ' %'


  }





  /* alert(tipoDado)
   alert(varNome)
   alert(inputDados)*/

}


btnCalcular.addEventListener("click", calc)
btnLimpar.addEventListener("click", limpar)