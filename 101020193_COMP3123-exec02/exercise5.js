var array = [1, 2, 3, 4];

var calculateSum = array.reduce((numbers, num) => {
    return numbers + num;
});

var calculateProduct = array.reduce((numbers, num) => {
    return numbers * num;
})

console.log(calculateSum);
console.log(calculateProduct);