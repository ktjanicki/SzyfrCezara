// Main JavaScript file

import { cesar } from './cesar.js';

document.querySelector('.encryptButton').addEventListener('click', () => {
    document.querySelector('.message').textContent = cesar(document.querySelector('input').value);
    document.querySelector('.result').classList.add('show');
});