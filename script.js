const button = document.getElementById("bitch");
const displayCount = document.getElementById('bitchCount');
let bitchCount = 0;

button.addEventListener('click', bitchIncrease);

function bitchIncrease() {
    bitchCount++;
    displayCount.innerText = bitchCount;
}