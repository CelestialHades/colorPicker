//1. Get DOM Elements

const colorInput = document.getElementById('colorInput');
const colorInfo = document.getElementById('colorInfo');

//2, function to upadtte color info
function updateColor() {
    const hex = colorInput.value.toUpperCase();

    //3. convert hex to RGB
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);

    //4. update display and background

    colorInfo .textContent = `Hex ${hex} | RGB: ${r}, ${g}, ${b}`;
    document.body.style.backgroundColor = hex;

}


//5. add event listener for color changes
colorInput.addEventListener('input', updateColor);

//6. initialize update
updateColor();