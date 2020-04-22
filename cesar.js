const cesar = sentence => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const alphabetBigArray = alphabet.toUpperCase().split('');
    const result = [];
    const encrypt = index => parseInt((index + 13) % alphabet.length);

    sentence.split('').forEach(letter => {
        if (alphabetArray.includes(letter)) {
            result.push(alphabetArray[encrypt(alphabetArray.indexOf(letter))]);
        } else if (alphabetBigArray.includes(letter)) {
            result.push(alphabetBigArray[encrypt(alphabetBigArray.indexOf(letter))]);
        } else {
            result.push(letter);
        }
    });

    return result.join('');

}

export { cesar };