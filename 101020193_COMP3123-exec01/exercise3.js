function right(string) {
    // let newString = string.substring(3) + string.substring(0, 3);
    let newString = string.substring(string.length-3, string.length) + string.substring(0, string.length-3);
    return newString;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));