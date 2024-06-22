const decBtn = document.getElementById( "decreaseBtn" );
const resBtn = document.getElementById( "resetBtn" );
const incBtn = document.getElementById( "increaseBtn" );

const countLabel = document.getElementById( "countLabel" );
let counter = 0;

incBtn.onclick = () => {
    countLabel.textContent = ++counter;
}

decBtn.onclick = () => {
    countLabel.textContent = --counter;
}

resBtn.onclick = () => {
    countLabel.textContent = counter = 0;
}
