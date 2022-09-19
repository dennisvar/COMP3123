const colors = ['red', 'green', 'blue']

function capitalize(string) {
    const [firstLetter, ...otherLetters] = string;
    return firstLetter.toUpperCase() + otherLetters.join('').toLowerCase();
}

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);
