var btnCalcularBinomial = document.getElementById('btnCalcular_binomial')

const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}

let analiseCombinatoria = (a, b) => {
    if (b == 1) return a
    if (a != b && b != 0) {
        let r;
        r = fatorial(a) / (fatorial((a - b)) * fatorial(b));
        return r;
    } else {
        return 1;
    }

}

let distribuicao_Binomial = (k, p, q, n) => {
    /* let n = 4
     let p = 30
     let q = (100 - p) / 100 ;*/

    q = q / 100
    p = p / 100;

    if (k > n) {
        alert("A amostra precisa ser maior ou igual ao número de eventos!")
    } else {
        var resultado = (analiseCombinatoria(n, k) * (p ** k)) * (q ** (n - k))
        resultado = resultado * 100
    }
    return resultado

}
function calcular_binomial() {
    let sucesso = document.getElementById('sucesso').value, fracasso = document.getElementById('fracasso').value, amostra = document.getElementById('tamanho_Amostra').value
    let eventos = document.getElementById('eventos').value

    var elementos_eventos = eventos.split(";").map(x => Number(x))
    console.log(elementos_eventos)

    var resultados = elementos_eventos.map(a => distribuicao_Binomial(a, sucesso, fracasso, amostra))
    resultados = resultados.reduce((a, b) => a + b)
    console.log(resultados)
    resultados = resultados.toFixed(2) + (' %')
    let media = amostra * sucesso
    let desvioPadrao = Math.sqrt(amostra * sucesso * fracasso)

    console.log(resultados)

    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultados
    document.getElementById('media').innerHTML = 'Média: ' + media
    document.getElementById('dp').innerHTML = 'Desvio Padrão: ' + desvioPadrao.toFixed(2)

}

btnCalcularBinomial.addEventListener('click', calcular_binomial)





/*var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
// Create the chart

Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
});*/