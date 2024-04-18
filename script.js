document.getElementById('cidade').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const entrada = document.getElementById('entrada').value;
    const chave = '777fd6c175f16899b669ab9b22be7638'; //Chave do Professor

    // URL da API
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${entrada}&appid=${chave}&units=metric`;

    // Requisição para a API
    fetch(Url)
        .then(response => response.json())
        .then(data => {

            if (data.weather[0].description === "broken clouds") {
                data.weather[0].description = "Fauzer vai Pescar";
            }
            
            const weather = document.getElementById('Informaçãodotempo');
            weather.innerHTML = `
                <p>Temperatura Máxima: ${data.main.temp_max}°C</p>
                <p>Temperatura Mínima: ${data.main.temp_min}°C</p>
                <p>Sensação Térmica: ${data.main.feels_like}°C</p>
                <p>Condição: ${data.weather[0].description}</p>
                
            `;
            
            
        })
        .catch(error => console.log('Erro ao buscar dados da API:', error));
});


// Clear Sky (Céu Limpo): Descrição de céu sem nuvens ou com poucas nuvens.
// Few Clouds (Poucas Nuvens): Céu parcialmente nublado, com algumas nuvens no céu.
// Scattered Clouds (Nuvens Dispersas): Céu parcialmente nublado, com nuvens dispersas cobrindo parte do céu.
// Broken Clouds (Nuvens Quebradas): Céu parcialmente nublado, com muitas nuvens cobrindo o céu, mas ainda permitindo a passagem de luz solar.
// Overcast Clouds (Nuvens Nubladas): Céu completamente nublado, sem visibilidade direta do sol ou da lua.
// Mist (Nevoeiro): Presença de umidade na atmosfera que reduz a visibilidade.
// Smoke (Fumaça): Presença de fumaça no ar, muitas vezes devido a incêndios florestais ou atividades industriais.
// Haze (Neblina): Presença de partículas em suspensão na atmosfera, reduzindo a visibilidade.
// Dust (Poeira): Presença de poeira suspensa na atmosfera, muitas vezes devido a condições de vento ou atividades humanas.
// Sand (Areia): Presença de partículas de areia suspensas no ar, geralmente associadas a tempestades de areia ou condições áridas.
// Ash (Cinzas): Presença de cinzas vulcânicas na atmosfera, geralmente após uma erupção vulcânica.
// Squalls (Squalls): Ocorrência de rajadas de vento intensas e súbitas.