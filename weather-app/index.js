const submitBtn = document.getElementsByClassName( ".submitBtn" );
const weatherForm = document.querySelector( ".weatherForm" );
const cityInput = document.querySelector( ".cityInput" );
const card = document.querySelector( ".card" );
const apiKey = "8430e3d0b9ce9aa1e4aa612aeb0b180d";

weatherForm.addEventListener( "submit", async event => {
    
    event.preventDefault();
    const city = cityInput.value;

    if( city ) {

        try {

            const weatherData = await getWeather( city );

            if ( weatherData.message && weatherData.cod != 200 ) {
                displayError( "Could not reach a moment!" );
            } else {
                displayWeatherInfo( weatherData );
            }
        } catch ( error ) {
            displayError( "Could not fetch data at a moment !" );
        }
    } else {
        displayError( "Please enter a city !" );
    }
});

async function getWeather( city_name ) {

    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${ city_name }&appid=${ apiKey }`;

    return new Promise(( resolve, reject ) => {
        fetch( apiEndpoint )
            .then( response => response.json())
            .then( value => resolve( value ))
            .catch( err => { reject( err ) });
    });
}

async function displayWeatherInfo( data ) {

    const { 
        name: city, 
        main: { temp, humidity }, 
        weather: [
            { description, id }
        ]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement( "h1" );
    const tempDisplay = document.createElement( "p" );
    const humidityDisplay = document.createElement( "p" );
    const descDisplay = document.createElement( "p" );
    const weatherEmoji = document.createElement( "p" );

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${ (temp - 273.15).toFixed( 1 )}°C`;
    humidityDisplay.textContent = `Humidity : ${ humidity }`;
    descDisplay.textContent = `${ description }`;
    weatherEmoji.textContent = await getWeatherEmoji( id );

    cityDisplay.classList.add( "cityDisplay" );
    tempDisplay.classList.add( "tempDisplay" );
    humidityDisplay.classList.add( "humidityDisplay" );
    descDisplay.classList.add( "descDisplay" );
    weatherEmoji.classList.add( "weatherEmoji" );
    
    card.appendChild( cityDisplay );
    card.appendChild( tempDisplay );
    card.appendChild( humidityDisplay );
    card.appendChild( descDisplay );
    card.appendChild( weatherEmoji );
}

async function getWeatherEmoji( id ) {

    switch ( true ) {
        case ( id >= 200 && id < 300 ): 
            return "⛈";
        case ( id >= 300 && id < 400 ):
            return "⛈";
        case ( id >= 500 && id < 600 ):
            return "⛈";
        case ( id >= 600 && id < 700 ):
            return "❄";
        case ( id >= 700 && id < 800 ):
            return "🌫";
        case ( id == 800 ):
            return "☀";
        case ( id > 800 && id < 810 ):
            return "☁";
        default:
            return "❓";
    }
}

async function displayError( message ) {

    card.textContent = "";
    card.style.display = "flex";

    const errorDisplay = document.createElement( "p" );
    errorDisplay.textContent = message;
    errorDisplay.classList.add( "errorDisplay" );
    card.appendChild( errorDisplay );
}