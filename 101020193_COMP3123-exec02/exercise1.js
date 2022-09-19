let gretter = (myArray, counter) => {
    const greetText = 'Hello';

    for (let index of myArray) {
        console.log(`${greetText} ${index}`);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);