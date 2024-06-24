const passWordLength = Number(window.prompt( `Enter password length` ));
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword( length, incLowCase, incUpCase, incNum, incSym ) {

    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharacters = "0123456789";
    const symbolCharacters = `!@#$%^&*()_+/*-+.|\}]{[:;"'<,>.?/`;

    let allowedCharacters = "";
    let password = "";

    allowedCharacters += incLowCase ? lowerCaseCharacters: "";
    allowedCharacters += incUpCase ? upperCaseCharacters: "";
    allowedCharacters += incNum ? numberCharacters: "";
    allowedCharacters += incSym ? symbolCharacters: "";
    
    if ( length <= 0 ) {
        return `Password length must be greater than 1`;
    } 
    if ( allowedCharacters.length == 0 ) {
        return `Atleast 1 character need to be selected`;
    } 

    for( let loopVar = 0; loopVar < passWordLength; loopVar++ ) {

        const randomIdx = Math.floor( Math.random() * allowedCharacters.length );
        password += allowedCharacters[ randomIdx ];
    }

    return password;
}

const password = generatePassword( passWordLength, includeLowerCase, 
                                    includeUpperCase, includeNumbers, includeSymbols );

console.log( `Generated Password : ${ password }` );