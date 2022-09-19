function capitalize(string) {
    const [firstLetter, ...otherLetters] = string;
    console.log(firstLetter.toUpperCase() + otherLetters.join('').toLowerCase());
}

capitalize("fooBar");
capitalize("nodeJs");