
const caesar13 = sentence => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const alphabetBigArray = alphabet.toUpperCase().split('');
    const result = [];
    const encrypt = index => parseInt((index + 13) % alphabet.length);

    if (!new RegExp(/^[a-zA-Z0-9/?]*$/g).test(sentence)) {
        throw new Error('Program obsługuje tylko litery bez polskich znaków i cyfry');
    }

    if (sentence === '') {
        throw new Error('Nic nie zostało wpisane');
    }

    sentence.split('').forEach(letter => {
        if (alphabetArray.includes(letter)) {
            result.push(alphabetArray[encrypt(alphabetArray.indexOf(letter))]);
        }

        if (alphabetBigArray.includes(letter)) {
            result.push(alphabetBigArray[encrypt(alphabetBigArray.indexOf(letter))]);
        }

        if (!alphabetArray.includes(letter) && !alphabetBigArray.includes(letter)) {
            result.push(letter);
        }
    });

    return result.join('');
}

export { caesar13 };