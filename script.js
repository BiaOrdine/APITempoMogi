async function getWeather() {
    //Conectar com a API
    var resposta = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mogi%20das%20Cruzes&units=metric&appid=64ed82577ced7f69cb1687f0ce536131');

    //Variavel para consumir o JONS do item temperatura
    var tempCelsius = resposta.data.main.temp;

    //Imprimir valor no Front End com concatenar Jquery e duas casas decimais.
    document.getElementById('temperatura').innerHTML = `A temperatura atual de Mogi das Cruzes é: ${tempCelsius.toFixed(2)} °C `;

}

//Chamar a Função
getWeather();