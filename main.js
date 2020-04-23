// Main JavaScript file

import { caesar13 } from './caesar.js';

document.querySelector('.encryptButton').addEventListener('click', () => {
    const resultMessage = document.querySelector('.message');
    document.querySelector('.result').classList.add('show');
    let output = '';

    try {
        output = caesar13(document.querySelector('input').value);
    } catch (e) {
        output = e.message;
    }

    resultMessage.textContent = output;
});
