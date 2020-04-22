


import { cesar } from './cesar.js';








const button = document.querySelector('button.encryptButton');
const input = document.querySelector('input')
const message = document.querySelector('aside div');

function goEncrypt() {
    message.textContent = cesar(input.value);
}

console.log(input)

button.addEventListener("click", goEncrypt);