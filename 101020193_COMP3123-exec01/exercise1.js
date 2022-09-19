function startCase(string) {
    let stringLower = string.toLowerCase();
    let wordArray = stringLower.split(" ");

    for (word in wordArray) {
        wordArray[word] = 
        wordArray[word].substring(0, 1).toUpperCase()
        + wordArray[word].substring(1);
    }
    
    newString =  wordArray.join(" ");
    return newString;
}

console.log(startCase("the quick brown fox"));