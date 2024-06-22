const subscribeBtn = document.getElementById( "myCheckBox" );
const visaBtn = document.getElementById( "visaBtn" );
const masterBtn = document.getElementById( "masterBtn" );
const payPalBtn = document.getElementById( "payPalBtn" );

const subResult = document.getElementById( "subResult" );
const paymentResult = document.getElementById ( "paymentResult" );

const submitBtn = document.getElementById( "finalSubmission" );

submitBtn.onclick = () => {
    
    if( subscribeBtn.checked ) {
        subResult.textContent = `Thanks for the subscription`;

        if( visaBtn.checked ) {
            paymentResult.textContent = `You are paying with Visa.`;
        } else if( masterBtn.checked ) {
            paymentResult.textContent = `You are paying with MasterCard.`;
        } else if( payPalBtn.checked ) {
            paymentResult.textContent = `You are paying with PayPal.`;
        } else {
            paymentResult.textContent = `You must select payment type.`;
        }
    } else {
        subResult.textContent = `Sorry ! Please subscribe for further updates.`;
    }
}