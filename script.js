const button = document.getElementById("bitch");
const displayCount = document.getElementById('bitchCount');
let bitchCount = 0;

button.addEventListener('click', bitchIncrease);

function bitchIncrease() {
    if (message.style.display === 'none') {
        message.style.display = 'inline';
    }

    bitchCount++;
    displayCount.innerText = bitchCount;
}