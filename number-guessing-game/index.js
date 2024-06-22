const minNum = 1, maxNum = 100;
const genNum = Math.floor( Math.random() * ( maxNum - minNum + 1 ));

let attempts = 0;
let guess;
let running = true;

while( running ) {

    guess = window.prompt( `Guess a number between ${ minNum } to ${ maxNum }` );
    guess = +( guess );

    if( isNaN( guess )) {
        window.alert( `Please enter a valid number.` );
    } else if( guess == 0 ) {
        running = false;
        break;
    } else if( guess > maxNum || guess < minNum ) {
        window.alert( `Please enter number in range.` );
    } else {

        ++attempts;
        if( guess > genNum ) {
            guess = window.alert( `Guessing number is greater` );
        } else if( guess < genNum ) {
            guess = window.alert( `Guessing number is lesser` );
        } else {
            window.alert( `Correct ! Total attempts ${ attempts }` );
            running = false;
            break;
        }
    }
    running = true;
}