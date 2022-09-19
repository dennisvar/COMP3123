function max(num1, num2, num3) {
    var numArray = [num1, num2, num3];

    var largest = numArray[0];

    for (var i = 0; i < numArray.length; i++) {
        if (largest < numArray[i] ) {
            largest = numArray[i];
        }
    }

    return largest;
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));