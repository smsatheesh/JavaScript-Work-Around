const display = document.getElementById( "display" );
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {

    if( !isRunning ) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval( updateWatch, 10 );
    }
}

function stopTimer() {

    if( isRunning ) {
        clearInterval( timer );
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetTimer() {

    clearInterval( timer );
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function updateWatch() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor( elapsedTime / ( 1000 * 60 * 60 ));
    let minutes = Math.floor( elapsedTime / ( 1000 * 60 ) % 60 );
    let seconds = Math.floor( elapsedTime / 1000 % 60 );
    let milliSeconds = Math.floor( elapsedTime % 1000 / 10 );

    hours = hours.toString().padStart( 2, 0 );
    minutes = minutes.toString().padStart( 2, 0 );
    seconds = seconds.toString().padStart( 2, 0 );
    milliSeconds = milliSeconds.toString().padStart( 2, 0 );

    display.textContent = `${ hours }:${ minutes }:${ seconds }:${ milliSeconds }`;
}