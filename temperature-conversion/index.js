let textBox = document.getElementById( "textBox" );
const toFah = document.getElementById( "toFahrenheit" );
const toCel = document.getElementById( "toCelsius" );
const result = document.getElementById( "displayResult" );
let temp;

function convert() {

    temp = Number( textBox.value );
    if( toFah.checked ) {

        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed( 1 ) + "°F";
    } else if( toCel.checked ) {

        temp = ( temp - 32 ) * ( 5 / 9 );
        result.textContent = temp.toFixed( 1 ) + "°C";
    } else {

        result.textContent = "Select a unit";
    }
}