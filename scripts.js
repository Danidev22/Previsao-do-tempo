

const key = "f9b9780412012948f6b7f3a6eb6c668b";

function colocarDadosNaTela(dados) {
   console.log(dados)
   document.querySelector(".city").innerHTML = "Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "° C"
   document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
   document.querySelector(".umidade").innerHTML = "Umidade:" + "  " + dados.main.humidity + "%"
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
    
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value
    console.log(cidade)

    buscarCidade(cidade)

}