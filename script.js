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

    if (bitchCount >= 5 && imageContainer.innerHTML === "") {
        const img = document.createElement('img');
        img.src = 'images/laugh.gif'; 
        img.alt = 'Surprise Image';
        img.style.width = '200px'; 
        imageContainer.appendChild(img);
    }
}