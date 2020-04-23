// Main JavaScript file

import { caesar13 } from './caesar.js';

document.querySelector('.encryptButton').addEventListener('click', () => {
    try {
        document.querySelector('.message').textContent = caesar13(document.querySelector('input').value);
        document.querySelector('.result').classList.add('show');
    } catch (e) {
        document.querySelector('.message').textContent = e.message;
        document.querySelector('.result').classList.add('show');
    }
});
