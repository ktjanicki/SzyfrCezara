// Main JavaScript file

import { cesar13 } from './cesar.js';

document.querySelector('.encryptButton').addEventListener('click', () => {
    try {
        document.querySelector('.message').textContent = cesar13(document.querySelector('input').value);
        document.querySelector('.result').classList.add('show');
    } catch (e) {
        document.querySelector('.message').textContent = e.message;
        document.querySelector('.result').classList.add('show');
    }
});
