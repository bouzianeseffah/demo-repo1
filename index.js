const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = '78bff4d8505afd592a6b4d1b9d5493c9';
weatherForm.addEventListener('submit',async event => {
    //prevent refresh the page
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
           const weatherData = await getWeatherData(city);
           displayWeatherInfo(weatherData);
        }catch(error){
            //console.error(error);
            displayError(error)
        }


    }
    else{
        displayError('please enter a city')
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const responce = await fetch(apiUrl);
    //console.log(responce)
    if(!responce.ok){
        throw new Error('could not fetch weather data')
    }
    else{
        return  await responce.json();
    }
};  

function displayWeatherInfo(data){
    // console.log(data)
    //object destructuring
    const {name: city, 
           main: {temp, humidity},
           weather: [{description, id}]} = data ;
    card.textContent = ''; 
    card.style.display = 'flex';
    const cityDisplay = document.createElement('h1');   
    const tempDisplay = document.createElement('p');    
    const humidityDisplay = document.createElement('p');    
    const descDisplay = document.createElement('p');   
    const weatherImoji = document.createElement('p');   
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°c`
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherImoji.textContent = getWeatherImoji(id)

    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.classList.add('descDisplay');
    weatherImoji.classList.add('weatherImoji');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherImoji)

};

function getWeatherImoji(weatherId){
    switch(true){
        case(weatherId >= 200 && weatherId < 300 ):
        return '⛈️';
        case(weatherId >= 300 && weatherId < 400 ):
        return '🌧️';
        case(weatherId >= 500 && weatherId < 600 ):
        return '⛈️';
        case(weatherId >= 600 && weatherId < 700 ):
        return '❄️';
        case(weatherId >= 700 && weatherId < 800 ):
        return '🌫️';
        case(weatherId === 800):
        return '☀️';
        case(weatherId >= 801 && weatherId < 810):
        return '☁️';
        default:
            return '?';
    }
};

function displayError(message){
     const errorDisplay = document.createElement('p');
     errorDisplay.textContent = message;
     errorDisplay.classList.add('errorDisplay');
     card.textContent = '';
     card.style.display = 'flex'
     card.appendChild(errorDisplay)
};