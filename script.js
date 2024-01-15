const keyboardDiv = document.querySelector('.keyboard')

for (let i = 97; i <= 122; i++) {
    const buttton = document.createElement("button");
    buttton.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(buttton)
}